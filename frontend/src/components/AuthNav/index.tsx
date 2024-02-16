import React, { useEffect, useState } from "react";
import { ButtonRecipito } from "../ButtonRecipito";
import { getServerSession } from "next-auth";  

import { authOptions } from "@/libs/auth";
import { Recette } from "@/app/types/Strapi";
import { fetchRecipes } from "@/db/fetchData";
import { signOut } from "next-auth/react";

export default function AuthNav() {
  const [session, setSession] = useState<boolean | null>(null); // Change initial state to null
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const retrieveSession = async () => {
      try {
        const session = await getServerSession(authOptions);
        setSession(session?.user?.email ? true : false);
      } catch (error) {
        setError("Failed to fetch session");
      } finally {
        // Move this line inside finally to ensure it always executes
        setSession(true);
      }
    };

    retrieveSession();
  }, []); // Remove the second argument or make it an empty array

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" }); // Sign out and redirect to the homepage
      setSession(false); // Update session state to false
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  // Return null or loading indicator if session is not yet determined
  if (session === null) {
    return null; // or return a loading indicator
  }

  return (
    <>
      {session ? (
        <div className="flex justify-center md:justify-end">
          <button
            type="button"
            title="Déconnexion"
            onClick={() => signOut()}
            className=" p-2 mx-2 btn text-pink-600 border-primary md:border-2 hover:bg-pink-600 hover:text-white transition ease-out duration-500 "
          >
            Déconnexion
          </button>
        </div>
      ) : (
        <div className="flex justify-center md:justify-end">
          <ButtonRecipito link="/login" title="Connexion" />
          <ButtonRecipito link="/register" title="Inscription" />
        </div>
      )}
    </>
  );
}
