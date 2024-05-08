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

export interface SelectedGuessOptions {
  [key: string]: string | number | boolean | undefined;

  inkable: boolean;
  cost: number;
  type: string;
}

export interface SelectedDevTools {
  [key: string]: string | number | boolean | undefined;

  showEmptyPlaceholders: boolean;
  cardNumber: number;
}

export interface Option {
  value: string | number;
  label: string;
}

export interface CardOptions {
  [key: string]: Option[];

  cardType: Option[];
  cost: Option[];
}

export interface OptionState {
  guessOptionState: SelectedGuessOptions;
  devToolOptionState: SelectedDevTools;
}

type Guess = {
  type: "guess";
  action: {
    [key: string]: boolean | number | string;
  };
};

type DevTool = {
  type: "devTool";
  action: {
    [key: string]: boolean | number;
  };
};

export type OptionActions = Guess | DevTool;
