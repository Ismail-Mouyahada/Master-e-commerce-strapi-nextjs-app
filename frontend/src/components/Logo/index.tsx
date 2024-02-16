import { Navbar, NavbarBrand } from "flowbite-react";
import Image from "next/image";
import { ReactNode } from "react";

export function Logo() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
          <a href="/" className="hover:text-gray-700">
            <Image
              style={{ width: "auto", height: "auto" }}
              priority
              alt="logo"
              src={"/logo.png"}
              height={100}
              width={200}
            />
          </a>
        </h1>
        <div className="px-4 cursor-pointer md:hidden"  >
          {/* <Navbar fluid={true} rounded={true} className="transition-all duration-300 bg-transparent border-none outline-none text-pink-500">
         <NavbarBrand>
       
         </NavbarBrand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Link className="text-start rounded-md shadow-sm shadow-gray-300 bg-gray-200 my-2 text-pink-600border-0 font-bold " href="/accueil" active={true}> Home </Navbar.Link>
              <Navbar.Link className="text-start rounded-md shadow-sm shadow-gray-300 bg-gray-200 my-2 text-pink-600border-0 font-bold " href="/restaurants">About</Navbar.Link>
              <Navbar.Link className="text-start rounded-md shadow-sm shadow-gray-300 bg-gray-200 my-2 text-pink-600border-0 font-bold " href="/recettes">Services</Navbar.Link>
              <Navbar.Link className="text-start rounded-md shadow-sm shadow-gray-300 bg-gray-200 my-2 text-pink-600border-0 font-bold " href="/propos">Propos</Navbar.Link>
            </Navbar.Collapse>
          </Navbar> */}
        </div>
      </div>

      
    </>
  );
}
