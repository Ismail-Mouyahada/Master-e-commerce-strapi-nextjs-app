import { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types'; // Import IconDefinition type

interface LinkSidebarProps {
  link: string;
  title:string;
  icon: IconDefinition
}

export function LinkSidebar({ link, title, icon  }: LinkSidebarProps) {
  return (
    <>
      <li className="py-1">
        <a href={link} className="px-4 flex justify-start hover:border-l-4 hover:border-pink-500 text-lg  items-center hover:text-pink-600transition duration-200 hover:scale-110">
          <div className="p-3 rounded-full bg-slate-100"> 
          <FontAwesomeIcon className="w-5 h-5 text-pink-600" icon={icon} /></div>
          <span className="px-3">{title}</span>
       
        </a>
      </li>
    </>
  );
}
