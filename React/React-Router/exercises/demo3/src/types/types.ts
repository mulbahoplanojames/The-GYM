export type Products = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  reviews: Review[];
};

type Review = {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
};

export type ProductsResponse = {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
};

export type Posts = {
  id: string;
  title: string;
  category: string;
  image: string;
  content: string;
};

export type Recipe = {
  id: number;
  name: string;
  image: string;
  instructions: string[];
  ingredients: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  rating: number;
  reviewCount: number;
  cuisine: string;
  difficulty: string;
  caloriesPerServing: number;
};

export type RecipeResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  type: string[];
  height: number;
  weight: number;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
};
