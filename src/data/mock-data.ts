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
  {
    id: 2,
    title: 'Мамин Шоколадный Торт',
    category: 'Торты',
    cookingTime: 90,
    imgUrl: 'https://placehold.co/600x400/4A3A31/FCF7F2?text=Chocolate+Cake',
    ingredients: [
      { id: 1, name: 'Мука', amount: 250, unit: 'г' },
      { id: 2, name: 'Какао-порошок', amount: 60, unit: 'г' },
      { id: 3, name: 'Сахар', amount: 300, unit: 'г' },
      { id: 4, name: 'Яйца', amount: 2, unit: 'шт' },
      { id: 5, name: 'Молоко', amount: 250, unit: 'мл' },
    ],
    steps: [
      { id: 1, description: 'Смешать сухие ингредиенты: муку, какао и сахар.' },
      { id: 2, description: 'Добавить яйца и теплое молоко, тщательно миксовать.' },
      { id: 3, description: 'Выпекать при 170°C в течение 45 минут.' },
      { id: 4, description: 'Остудить коржи и промазать заварным кремом.' },
    ],
    servings: 10,
  },
  {
    id: 3,
    title: 'Мои Лимонные Квадратики',
    category: 'Десерты',
    cookingTime: 50,
    imgUrl: 'https://placehold.co/600x400/E2B97F/4A3A31?text=Lemon+Squares',
    ingredients: [
      { id: 1, name: 'Сливочное масло', amount: 115, unit: 'г' },
      { id: 2, name: 'Мука', amount: 120, unit: 'г' },
      { id: 3, name: 'Сахар', amount: 200, unit: 'г' },
      { id: 4, name: 'Лимонный сок', amount: 80, unit: 'мл' },
      { id: 5, name: 'Яйца', amount: 2, unit: 'шт' },
    ],
    steps: [
      { id: 1, description: 'Растереть масло с мукой и 50г сахара в крошку. Утрамбовать в форму.' },
      { id: 2, description: 'Выпекать основу 15 минут при 180°C.' },
      { id: 3, description: 'Взбить яйца с оставшимся сахаром и лимонным соком.' },
      { id: 4, description: 'Вылить заливку на горячую основу и печь еще 20 минут.' },
    ],
    servings: 12,
  },
  {
    id: 4,
    title: 'Ягодный Чизкейк',
    category: 'Торты',
    cookingTime: 120,
    imgUrl: 'https://placehold.co/600x400/C57B76/FCF7F2?text=Berry+Cheesecake',
    ingredients: [
      { id: 1, name: 'Печенье', amount: 250, unit: 'г' },
      { id: 2, name: 'Сливочное масло', amount: 100, unit: 'г' },
      { id: 3, name: 'Творожный сыр', amount: 600, unit: 'г' },
      { id: 4, name: 'Сливки 33%', amount: 150, unit: 'мл' },
      { id: 5, name: 'Смесь ягод', amount: 300, unit: 'г' },
    ],
    steps: [
      { id: 1, description: 'Измельчить печенье в блендере, смешать с растопленным маслом и сформировать дно.' },
      { id: 2, description: 'Сыр взбить со сливками и сахаром до однородности.' },
      { id: 3, description: 'Выложить сырную массу на основу, выпекать 1 час при 130°C на водяной бане.' },
      { id: 4, description: 'Остудить в холодильнике 6 часов. Украсить свежими ягодами перед подачей.' },
    ],
    servings: 8,
  },
  {
    id: 5,
    title: 'Мятное Печенье',
    category: 'Печенье',
    cookingTime: 30,
    imgUrl: 'https://placehold.co/600x400/7B9D82/FCF7F2?text=Mint+Cookies',
    ingredients: [
      { id: 1, name: 'Свежая мята', amount: 30, unit: 'г' },
      { id: 2, name: 'Сахар', amount: 100, unit: 'г' },
      { id: 3, name: 'Сливочное масло', amount: 100, unit: 'г' },
      { id: 4, name: 'Мука', amount: 200, unit: 'г' },
      { id: 5, name: 'Яйцо', amount: 1, unit: 'шт' },
    ],
    steps: [
      { id: 1, description: 'Пробить листья мяты с сахаром в блендере до получения зеленой пасты.' },
      { id: 2, description: 'Добавить мягкое масло, яйцо и взбить.' },
      { id: 3, description: 'Всыпать муку, замесить тесто и скатать небольшие шарики.' },
      { id: 4, description: 'Слегка приплюснуть шарики на противне и печь 15 минут при 180°C.' },
    ],
    servings: 15,
  },
  {
    id: 6,
    title: 'Медовик От Сестры',
    category: 'Торты',
    cookingTime: 180,
    imgUrl: 'https://placehold.co/600x400/8B5E3C/FCF7F2?text=Honey+Cake',
    ingredients: [
      { id: 1, name: 'Мед', amount: 3, unit: 'ст. л.' },
      { id: 2, name: 'Сахар', amount: 150, unit: 'г' },
      { id: 3, name: 'Сливочное масло', amount: 50, unit: 'г' },
      { id: 4, name: 'Мука', amount: 400, unit: 'г' },
      { id: 5, name: 'Сметана 25%', amount: 600, unit: 'г' },
    ],
    steps: [
      { id: 1, description: 'Растопить на водяной бане мед, масло и сахар. Добавить соду (масса вспенится).' },
      { id: 2, description: 'Ввести яйца и муку, замесить заварное тесто.' },
      { id: 3, description: 'Разделить на 8 частей, тонко раскатать каждую и выпекать по 4-5 минут.' },
      { id: 4, description: 'Взбить сметану с пудрой. Промазать остывшие коржи и оставить пропитываться на ночь.' },
    ],
    servings: 12,
  },
];
