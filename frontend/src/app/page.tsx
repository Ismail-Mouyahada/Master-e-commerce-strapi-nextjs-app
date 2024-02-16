"use client";
import { useEffect, useState } from "react";
import { ButtonRecipito } from "@/components/ButtonRecipito";
import { Header } from "@/components/Header";

import { Sidebar } from "@/components/Sidebar";
import { fetchRecipes } from "@/db/fetchData";
import { Recette, StrapiEntity } from "./types/Strapi";
import { RecipeCard } from "@/components/RecipeCard";
import { Loader } from "./Loader";
import { ErrorComponent } from "./ErrorComponent";
import Image from "next/image";

// Assuming RecipeResponse is the type of the response from fetchRecipes

export default function Home() {
  const [recipes, setRecipes] = useState<Recette[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const retrieveRecipes = async () => {
      try {
        const resp = await fetchRecipes();
        // Assuming fetchRecipes returns an array of StrapiEntity<Recette>
        const recettes = resp.map((entity: StrapiEntity<Recette>) => entity.data);  // Extract the recette object from each StrapiEntity
        setRecipes(recettes);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    retrieveRecipes();
  }, []);

  return (
    <div className="text-gray-600 font-body m-0 p-0">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorComponent message={"Une erreur est survenue"} />
      ) : (
        <div>
          <>
            <header className="recipito-landing">
              <div className="row">
                <div className="logo">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-fit h-fit"
                    property=""
                    alt=""
                    src="/logo.png"
                  />
                </div>
                <ul className="main-nav">
                  <li>
                    <a href="/">Accueil</a>
                  </li>
                  <li>
                    <a href="/recettes">Recettes</a>
                  </li>
                  <li>
                    <a href="/horaires">Horaires</a>
                  </li>
                  <li>
                    <a href="/propos">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="hero">
                <h1>Votre Restaurant vous partgez ces recettes ! </h1>
                <div className="button-awesome">
                  <a href="/" className="btn btn-half">
                    découvrez nos recettes
                  </a>
                  <a href="/" className="btn btn-full">
                    Take Out
                  </a>
                </div>
              </div>
            </header>
          </>
     
        </div>
      )}
    </div>
  );
}
