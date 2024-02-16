"use client";
import { useEffect, useState } from "react";
import { AuthLayout } from "@/Layouts/AuthLayout";
import { Loader } from "@/app/Loader";
import { Etape, Ingredient, Recette, StrapiEntity } from "@/app/types/Strapi";

import Image from "next/image";
import { fetchRecipe } from "@/db/fetchData";
import { Slider } from "@/components/Slider";
 

function RecettePage({ params }: { params: { id: number } }) {
  const { id } = params;

  // Use useClient hook if necessary
 

  const [recette, setRecette] = useState<Recette | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const retrieveRecette = async () => {
      try {
        const response: StrapiEntity<Recette> = await fetchRecipe(id);
        setRecette(response.attributes); // assuming fetchData directly returns a recette object
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    retrieveRecette();
  }, [id]); // Ensure useEffect runs when 'id' changes

  console.log(recette);

  return (
    <AuthLayout>
      <div className="bg-white p-6 rounded-lg shadow-lg my-3">
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {recette && (
          <>
            <h1 className="text-2xl font-bold mb-4">{recette.nom_recette}</h1>

            <Slider images={recette.photos.data}/>

            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>

            <p className="my-3">{ recette.description.toString()}</p>
            <ul className="list-disc list-inside mb-4">
              {recette.ingredients.data.map((ingredient) => (
                <li key={ingredient.id} className="mb-2">
                  {ingredient.attributes.quantite} x{" "}
                  {ingredient.attributes.unite} -{" "}
                  {ingredient.attributes.nom_ingredient}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside mb-6">
               {recette.etapes.data.map((etape) => (
                  <li key={etape.id} className="">
                    {etape.attributes.instructions?.data.toString()}
                  </li>
                ))}
            </ol>

            <p className="text-gray-700 mb-4">
              Serve the cake with your favorite frosting or enjoy it plain!
            </p>

            <div className="text-center">
              <button onClick={()=>window.print()} className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Imprimer la recette
              </button>
            </div>
          </>
        )}
      </div>
    </AuthLayout>
  );
}

export default RecettePage;
