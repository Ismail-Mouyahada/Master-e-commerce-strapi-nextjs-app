import { fetchRecipes } from "@/db/fetchData";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

 
export async function GET(req: Request, res: NextResponse) {
  try {
 
    const data = await fetchRecipes()

      return NextResponse.json(data);
   
  }catch(e){

    return NextResponse.json({ message:"Une erreur est servenu"});
  }
}
