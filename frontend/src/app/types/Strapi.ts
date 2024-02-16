export type StrapiResponse<DataType> = {
    id:number;
    data: DataType;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number; // Corrected 'total' to be a generic number type instead of hardcoded 1
        };
    };
};

export type StrapiData<Entity> = {
    id: number;
    data: StrapiEntity<Entity>;
};

export type StrapiMultiData<Entity> = {
    [x: string]: any;
    id: number;
    data: Array<StrapiEntity<Entity>>;
};

export type StrapiEntity<Entity> = {
    [x: string]: any;
    id: number;
    attributes: Entity;
};

export type Recette = {
    id: number;
    attributes:any;
    nom_recette: string;
    description: StrapiRichtext; // Corrected typo in 'StrapiRichtext'
    difficulte: number;
    temps_preparation: number;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    photos: StrapiMultiData<Photo>;
    users_permissions_user: StrapiData<User>;
    ingredients: StrapiMultiData<Ingredient>;
    etapes: StrapiMultiData<Etape>;
};

export type Ingredient = {
    id: number;
    data:any;
    nom_ingredient: string;
    quantite: number;
    unite: string;
    recettes: StrapiMultiData<Recette>; 
}

export type Etape = {
    instructions: Text;
    recette: StrapiData<Recette>;
}

export type User = {
    token: string;
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
};

export type StrapiRichtext = Array<{
    type: string;
    children: Array<{ text: string }>;
}>;

export type Photo = {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    url: string;
    createdAt: string;
    updatedAt: string;
};


// types.ts
// interface User {
//     id: number;
//     username: string;
//     email: string;
//     provider: string;
//     confirmed: boolean;
//     blocked: boolean;
//     createdAt: string;
//     updatedAt: string;
//   }
  
//   interface Ingredient {
//     id: number;
//     nom_ingredient: string;
//     quantite: number;
//     unite: string;
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//   }
  
//   interface EtapeInstruction {
//     type: string;
//     children: { text: string; type: string }[];
//   }
  
//   interface Etape {
//     id: number;
//     Instructions: EtapeInstruction[];
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//   }
  
//   interface Photo {
//     id: number;
//     name: string;
//     alternativeText: string | null;
//     caption: string | null;
//     width: number;
//     height: number;
//     formats: {
//       thumbnail: {
//         ext: string;
//         url: string;
//         hash: string;
//         mime: string;
//         name: string;
//         path: string | null;
//         size: number;
//         width: number;
//         height: number;
//       }
//     };
//     hash: string;
//     ext: string;
//     mime: string;
//     size: number;
//     url: string;
//     previewUrl: string | null;
//     provider: string;
//     provider_metadata: any | null;
//     createdAt: string;
//     updatedAt: string;
//   }
  
//   interface Recette {
//     id: number; // Ensure id is included
//     nom_recette: string;
//     description: string;
//     difficulte: number;
//     temps_preparation: number;
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//     users_permissions_user: User;
//     etapes: { data: Etape[] };
//     ingredients: { data: Ingredient[] };
//     photos: { data: Photo[] };
//   }
  
//   interface Pagination {
//     page: number;
//     pageSize: number;
//     pageCount: number;
//     total: number;
//   }
  
//   interface ApiResponse {
//     data: Recette[];
//     meta: {
//       pagination: Pagination;
//     };
//   }
  
//   export type { ApiResponse, Recette, Pagination };