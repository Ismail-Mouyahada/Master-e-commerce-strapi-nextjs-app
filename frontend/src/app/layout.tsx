 
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Loader } from "./Loader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { redirect } from "next/dist/server/api-utils";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipito",
  description: "Votre restaurant favori, très bon, très gourmand !",
  manifest: "/manifest.json",
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {

  
const session = await getServerSession(authOptions);

 
 

  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* <Suspense unstable_expectedLoadTime={5} fallback={<Loader />}> */}
          {children}
        {/* </Suspense> */}
      </body>
    </html>
  );
}
