"use client";
import { ButtonRecipito } from "@/components/ButtonRecipito";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
 
}

export function AuthLayout({ children }: AuthLayoutProps) {

  
  return (
    <>
      <div className="text-gray-600 font-body">
      <div className="grid lg:grid-cols-8">
        <Sidebar
          key={1}
          attributes="lg:col-span-1 md:flex md:justify-start p-6 shadow-md"
        />
          <main className="bg-gray-100 px-16 py-6 lg:col-span-7 min-h-screen">
           
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
