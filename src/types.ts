export interface Card {
  artist: string;
  setName: string;
  setNum: number;
  color: string;
  image: string;
  cost: number;
  inkable: boolean;
  name: string;
  type: string;
  rarity: string;
  flavorText: string;
  cardNum: number;
  bodyText?: string;
  willpower?: number;
  strength?: number;
  setId: string;
  classifications?: string;
}

export interface SelectedOptions {
  inkable: boolean;
}

export interface SelectedDevTools {
  showEmptyPlaceholders: boolean;
  selectedCardNumber: number;
}
