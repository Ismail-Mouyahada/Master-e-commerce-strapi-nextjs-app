import { getUser } from '@/db/fetchData';

import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
 

export const authOptions: NextAuthOptions = {

    // pages: {
    //     signIn:"/api/auth/signin",
    //     signOut: 'api/auth/signout',
    //     error: 'api/auth/error', // Error code passed in query string as ?error=
    //     verifyRequest: 'api/auth/verify-request', // (used for check email message)
    //     newUser: 'api/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    //   },
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Connexion",
            id: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }
        
                try {
                    const { user, token } = await getUser(credentials);
        
                    return {
                        id: user.id,
                        email: user.email,
                        name: user.username,  
                        token: token,
                        randomKey: "Hey cool",
                        confirmed: user.confirmed,
                        role: user.role,
                        username: user.username,
                        image: user.image,
                        password: user.password

                    };
                } catch (error) {
                    console.error('Authorization error:', error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET
};
 