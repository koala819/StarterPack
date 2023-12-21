export interface DragonBall {
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
}

interface Character {
  id: number;
  name: string;
  // Ajoutez les autres propriétés ici
}

export interface CharacterResponse {
  items: Character[];
}
