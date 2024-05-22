import { createContext, useContext, useReducer } from "react";
import { OptionState, OptionActions } from "../types";

const initialOptionData = {
  guessOptionState: {
    inkable: true,
    cost: 1,
    type: "",
    strength: 0,
    willpower: 1,
    color: "Amber",
    name: "",
    bodyText: "",
    lore: 1,
  },
  devToolOptionState: {
    showEmptyPlaceholders: true,
    showIncorrect: false,
    cardNumber: 0,
  },
  incorrectGuessState: {
    bodyText: false,
    color: false,
    cost: false,
    inkable: false,
    name: false,
    type: false,
    lore: false,
    strength: false,
    willpower: false,
  },
};

type Props = {
  children: React.ReactNode;
};

const OptionContext = createContext<OptionState>(initialOptionData);
const OptionDispatchContext =
  createContext<React.Dispatch<OptionActions> | null>(null);

export function OptionsProvider(props: Props) {
  const { children } = props;

  const [optionState, dispatch] = useReducer(optionsReducer, initialOptionData);

  return (
    <OptionContext.Provider value={optionState}>
      <OptionDispatchContext.Provider value={dispatch}>
        {children}
      </OptionDispatchContext.Provider>
    </OptionContext.Provider>
  );
}

export function useOption() {
  return useContext(OptionContext);
}

export function useOptionDispatch() {
  return useContext(OptionDispatchContext);
}

function optionsReducer(state: OptionState, action: OptionActions) {
  switch (action.type) {
    case "guess":
      return {
        ...state,
        guessOptionState: {
          ...state.guessOptionState,
          ...action.action,
        },
      };
    case "devTool":
      return {
        ...state,
        devToolOptionState: {
          ...state.devToolOptionState,
          ...action.action,
        },
      };
    case "incorrectGuess":
      return {
        ...state,
        incorrectGuessState: {
          ...state.incorrectGuessState,
          ...action.action,
        },
      };
    case "reset":
      return {
        ...state,
        guessOptionState: {
          ...initialOptionData.guessOptionState,
        },
        incorrectGuessState: {
          ...initialOptionData.incorrectGuessState,
        },
      };
    default:
      return state;
  }
}
