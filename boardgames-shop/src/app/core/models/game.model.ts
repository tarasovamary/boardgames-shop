export interface Game {
  id: number;
  name: string;
  price: number;
  images: string[];
  title: string;
  description: string;
  yearpublished: number;
  rating: string;
  designer: string;
  minplayers: number;
  maxplayers: number;
  playingtime: number;
  minage: number;
  type: string[];
  category: string[];
}
