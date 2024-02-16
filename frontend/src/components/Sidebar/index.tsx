import { ReactNode } from "react";
import { ListLinks } from "../ListLinks";
import { Logo } from "../Logo";

interface SidebarPropos{
  attributes:string;
}
export function Sidebar({attributes}:SidebarPropos) {
  return (
    <div className={attributes}>
      <nav className="text-right">
        <Logo />
        <ListLinks />
      </nav>
    </div>
  );
}
