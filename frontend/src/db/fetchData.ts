import { Recette, StrapiEntity } from "@/app/types/Strapi";

 

export const fetchRecipes = async () => {
    try {
      const rawResponse = await fetch(
        `${process.env.STRAPI_API_HOST}/api/recettes?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
          cache: "no-cache",
          //  next: { revalidate: 500 } 
        }
      );
      if (!rawResponse.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await rawResponse.json();
      const response = (data.data) as  
        Array<StrapiEntity<Recette>>;
  
      // // Extracting attributes from StrapiEntity and mapping it to array of Recette
      const recipes = response.map(entity => entity);
 
      return recipes;
    } catch (e) {
      console.error(e);
      throw e;
    }
};
 

export const fetchRecipe = async (id: number) => {
    try {
      const rawResponse = await fetch(
        `${process.env.STRAPI_API_HOST}/api/recettes/${id}?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
          cache: "no-cache",
          //  next: { revalidate: 500 } 
        }
      );
      if (!rawResponse.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await rawResponse.json();
      const response = (data.data) as StrapiEntity<Recette>;
  
      // // Extracting attributes from StrapiEntity and mapping it to array of Recette
      const recipe = response;
 
      return recipe;
    } catch (e) {
      console.error(e);
      throw e;
    }
};
 

import axios from 'axios';

interface Credentials {
    email: string;
    password: string;
}

export const getUser = async (credentials: Credentials) => {
    try {
        const response = await axios.post(`${process.env.STRAPI_API_HOST}auth/local`, {
            identifier: credentials.email,
            password: credentials.password,
        });

        return {
            user: response.data.user,
            token: response.data.jwt
        };
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
};
