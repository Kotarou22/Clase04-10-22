type Sprites = {
  front_default: string;
  front_female?:string;
  front_shiny?:string;
  front_shiny_female?:string;
}
type Stats = {
  base_stat: number;
  stat:{
    name:string;
  }
}
type Game_indices = {
  game_index : number;
  version : {
    name:string;
  }
}
type Types = {
  type : {
    name : string;
  }
}
type Moves = {
  move :{
    name: string;
  }
}
export interface Pokemon {
  name: string;
  order: number;
  sprites: Sprites;
  stats : Array<Stats>;
  game_indices : Array<Game_indices>;
  types : Array<Types>
  moves : Array<Moves>;
}
