import { ReactNode } from "react";

interface ButtonRecipitoProps {
  title: string;
  link: string;
}

export function ButtonRecipito({ title, link }: ButtonRecipitoProps) {
  return (
    <>
      <a
        href={link}
        className=" p-2 mx-2 btn text-pink-600 border-primary md:border-2 hover:bg-pink-600 hover:text-white transition ease-out duration-500 " >
        {title}
      </a>
    </>
  );
}
