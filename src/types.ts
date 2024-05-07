export interface Card {
  [key: string]: string | number | boolean | undefined;

  artist: string;
  abilities?: string;
  setName: string;
  setNum: number;
  color: string;
  image: string;
  cost: number;
  inkable: boolean;
  name: string;
  type: string;
  rarity: string;
  flavorText?: string;
  cardNum: number;
  bodyText?: string;
  willpower?: number;
  strength?: number;
  setId: string;
  classifications?: string;
}

export interface SelectedOptions {
  [key: string]: string | number | boolean | undefined;

  inkable: boolean;
  cost: number;
}

export interface SelectedDevTools {
  showEmptyPlaceholders: boolean;
  selectedCardNumber: number;
}
