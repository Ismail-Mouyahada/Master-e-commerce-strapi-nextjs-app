import { Recette } from "@/app/types/Strapi";
import Image from "next/image";
import Link from "next/link";
import { DiffculteIndicator } from "../DiffculteIndicator";

export function RecipeCard({ recette, index, key, id }: { recette: Recette, index:number, key:number, id:number }) {
 
  return (
    <>
      <Link key={index}  
        href={"/recettes/" + id}
        className="card hover:shadow-lg hover:scale-110 transition-all duration-500 hover:border-x-8 hover:border-primaryhover:text-pink-600"
      >
        <Image
        
          priority
          width={500}
          height={500}
          src={
            recette.photos.data[0].attributes.url
              ? `${process.env.STRAPI_API_HOST}${recette?.photos.data[0].attributes.url}`
              : "/logo.png"
          }
          alt={recette.nom_recette}
          className="w-full h-32 sm:h-48 object-cover"
        />
        <div className="m-4">
          <span className="font-bold">{recette.nom_recette}</span>

          <span className="block text-gray-500 text-sm">
            Proposé par{" "}
            {recette.users_permissions_user?.data?.attributes?.username}
   <span>         {recette?.id}</span>
          </span>
          <DiffculteIndicator difficulty={recette.difficulte} />
        </div>
        <div className="badge">
          <svg
            className="w-5 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{recette.temps_preparation} mins</span>
        </div>
      </Link>
    </>
  );
}
