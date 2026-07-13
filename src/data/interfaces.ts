export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export interface RecipeStep {
  id: number;
  description: string;
}

export interface Recipe {
  id: number;
  title: string;
  author: string;
  description: string;
  category: string;
  cookingTime: number;
  imgUrl: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
}
