export interface IRecipes{
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    author: string;
    difficulty: string;
    description: string;
    ingredients:IIngredients[];
    instructions: string[];
}

export  interface IIngredients{
    id: number;
    quantity: number | string;
    unit: string;
    name: string;

}
