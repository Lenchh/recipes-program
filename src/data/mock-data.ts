import appleCake from '../assets/appleCake.jpg';

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
  description?: string;
  category: string;
  cookingTime: number;
  imgUrl: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  servings: number;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Яблочный пирог',
    category: 'Выпечка',
    cookingTime: 60,
    imgUrl: appleCake,
    ingredients: [
      { id: 1, name: 'Яблоки', amount: 1, unit: 'кг' },
      { id: 2, name: 'Мука', amount: 300, unit: 'г' },
      { id: 3, name: 'Сахар', amount: 150, unit: 'г' },
    ],
    steps: [
      { id: 1, description: 'Нарезать яблоки дольками.' },
      { id: 2, description: 'Замесить тесто из муки, сахара и масла.' },
      { id: 3, description: 'Выпекать при 180°C около 40 минут.' },
    ],
    servings: 8,
  },
];
