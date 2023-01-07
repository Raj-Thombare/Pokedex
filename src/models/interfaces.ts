export interface pokemonListSchema {
  name: string;
  url: string;
}

interface typeName {
  name: string;
}

interface pokemonType {
  type: typeName;
}

export interface pokemonInfoSchema {
  name: string;
  height: number;
  weight: number;
  types: pokemonType[];
  spriteUrl: string;
}

interface sprite {
  back_default: string;
}

export interface pokemonCardSchema {
  name: string;
  sprites: sprite;
}


