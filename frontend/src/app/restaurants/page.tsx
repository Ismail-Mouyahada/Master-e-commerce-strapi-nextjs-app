"use client";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { fetchRecipes } from "@/db/fetchData";
import { RecipeCard } from "@/components/RecipeCard";
import { Recette, StrapiEntity } from "../types/Strapi";
import { ErrorComponent } from "../ErrorComponent";
import { Loader } from "../Loader";

import AuthNav from "@/components/AuthNav";

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
        const recettes = resp.map((entity: StrapiEntity<Recette>) => entity.data); 
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
    <div className="text-gray-600 font-body">
   
      <div className="grid lg:grid-cols-8">
        <Sidebar attributes="lg:col-span-1 md:flex md:justify-start p-6 shadow-md" />
        <main className="bg-gray-100 px-16 py-6 lg:col-span-7 min-h-screen">
          <AuthNav />
          <Header
            title="Recettes"
            description="Actualité de jour sur Recipito"
          />
          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorComponent message={"Une erreur est survenue"} />
          ) : (
            <div>
              <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                Nos sites
              </h4>
              <div className="mt-8 grid lg:grid-cols-3 gap-10">
                {recipes?.map((recipe: Recette, index: number) => (
                  <RecipeCard key={recipe.id} recette={recipe} index={index} id={recipe.id} />
                ))}
              </div>
              <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                Restaurant dans votre region
              </h4>
              <div className="mt-8">
                {recipes?.map((recipe: Recette, index: number) => (
                  <RecipeCard key={recipe.id} recette={recipe} index={index} id={recipe.id} />
                ))}
              </div>
              <div className="flex justify-center">
                <div className="p-3 m-2 btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
                  Afficher plus de sites
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
