export interface pokemonDataSchema {
  name: string;
  url: string;
}

export interface selectedPokemonSchema {
  name: string;
  height: number;
  weight: number;
  spriteUrl: sprite;
  base_experience: number;
}

interface sprite {
  front_default: string;
}

export interface pokemonListSchema {
  name: string;
  sprites: sprite;
}
