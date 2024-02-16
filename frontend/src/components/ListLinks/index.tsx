import { ReactNode } from "react";
import { LinkSidebar } from "../LinkSidebar";
 
import { faHome, faMedal ,faInfo, faBuilding, faTimes} from '@fortawesome/free-solid-svg-icons';
export function ListLinks() {
  return (
    <>
      <ul className="text-sm mt-6 hidden md:block" id="menu">
       <LinkSidebar icon={faHome} link="/" title="Accueil"/>
       <LinkSidebar icon={faBuilding} link="/restaurants" title="Restaurants"/>
       <LinkSidebar icon={faMedal} link="/recettes" title="Recettes"/>
       <LinkSidebar icon={faTimes} link="/horaires" title="Horaires"/>
       <LinkSidebar icon={faInfo} link="/propos" title="à propos"/>
  
      </ul>
    </>
  );
}
