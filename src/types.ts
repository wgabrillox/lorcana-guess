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
  lore?: number;
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
  strength?: number;
  willpower?: number;
  color: string;
  name: string;
  bodyText: string;
  lore: number;
}

export interface SelectedDevTools {
  [key: string]: string | number | boolean | undefined;

  showEmptyPlaceholders: boolean;
  cardNumber: number;
  showIncorrect: boolean;
}

export interface IncorrectGuessOptions {
  [key: string]: boolean;

  bodyText: boolean;
  color: boolean;
  cost: boolean;
  inkable: boolean;
  name: boolean;
  type: boolean;
  lore: boolean;
  strength: boolean;
  willpower: boolean;
}

export interface Option {
  value: string;
  label: string;
}

export interface CardOptions {
  [key: string]: Option[];

  type: Option[];
  color: Option[];
  name: Option[];
  bodyText: Option[];
}

export interface OptionState {
  guessOptionState: SelectedGuessOptions;
  devToolOptionState: SelectedDevTools;
  incorrectGuessState: IncorrectGuessOptions;
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

type IncorrectGuess = {
  type: "incorrectGuess";
  action: {
    [key: string]: boolean;
  };
};

type Reset = {
  type: "reset";
};

export type OptionActions = Guess | DevTool | IncorrectGuess | Reset;
