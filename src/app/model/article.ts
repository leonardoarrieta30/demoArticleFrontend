import {Category} from "./category";

export interface Article {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  photo: string;
  state: boolean;
  category: Category;
}
