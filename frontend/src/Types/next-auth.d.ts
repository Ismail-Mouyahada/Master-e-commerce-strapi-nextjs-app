import "next-auth";

interface StrapiUser {
  id: number;
  email: string;
  username: string;
  password: string;
  confirmed: boolean;
  role: string;
}

interface StrapiSession {
  user: StrapiUser;
}

declare module "next-auth" {
  interface User extends StrapiUser {}
  interface Session extends StrapiSession {}
}