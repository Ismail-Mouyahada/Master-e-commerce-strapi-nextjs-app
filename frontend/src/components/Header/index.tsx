import { ReactNode } from 'react';

interface HeaderProps {
  title:string;
  description:string;
}

export function Header({ title,description }: HeaderProps) {
  return (
    <>
           <header>
            <h2 className="text-pink-600text-4xl font-semibold my-4">{title} </h2>
            <h3 className="text-2xl font-semibold">{description}</h3>
          </header>
    </>
  );
}
