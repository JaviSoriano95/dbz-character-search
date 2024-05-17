export interface DbzCard {
  items: DbzCharacter[];
  meta: Meta;
  links: Links;
}

export interface DbzCharacter {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: Gender;
  description: string;
  image: string;
  affiliation: Affiliation;
  deletedAt: null;
}

interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

enum Affiliation {
  ArmyOfFrieza = "Army of Frieza",
  Freelancer = "Freelancer",
  ZFighter = "Z Fighter",
}

enum Gender {
  Female = "Female",
  Male = "Male",
}
