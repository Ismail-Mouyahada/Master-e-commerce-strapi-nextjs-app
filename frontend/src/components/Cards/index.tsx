import { ReactNode } from 'react';
 

interface CardsProps {
  children: ReactNode;
}

export function Cards({ children }: CardsProps) {
  return (
    <>
       <div className="mt-8 grid lg:grid-cols-3 gap-10">
              {/* <RecipeCard image="https://i.ibb.co/tpCdNcX/stew.jpg" chef="Ismail" title="Recette de chocolat" temps={55}/>
              <RecipeCard image="https://i.ibb.co/tpCdNcX/stew.jpg" chef="Ismail" title="Recette de chocolat" temps={55}/>
              <RecipeCard image="https://i.ibb.co/tpCdNcX/stew.jpg" chef="Ismail" title="Recette de chocolat" temps={55}/>
              <RecipeCard image="https://i.ibb.co/tpCdNcX/stew.jpg" chef="Ismail" title="Recette de chocolat" temps={55}/> */}
            
        </div>
    </>
  );
}
