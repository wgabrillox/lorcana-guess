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
    lore: 0,
    moveCost: 1,
  },
  globalOptionState: {
    showEmptyPlaceholders: true,
    showIncorrect: false,
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
    moveCost: false,
  },
  filterOptionState: {
    sets: {
      tfc: true,
      rof: true,
      ink: true,
      urs: true,
      ssk: true,
    },
    colors: {
      amber: true,
      amethyst: true,
      ruby: true,
      steel: true,
      sapphire: true,
      emerald: true,
    },
    type: {
      action: true,
      song: true,
      character: true,
      item: true,
      location: true,
    },
  },
  attributeOptionState: {
    bodyText: false,
    color: true,
    cost: true,
    inkable: true,
    name: true,
    type: true,
    lore: true,
    strength: false,
    willpower: false,
    moveCost: false,
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
    case "globalState":
      return {
        ...state,
        globalOptionState: {
          ...state.globalOptionState,
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
        globalOptionState: {
          ...state.globalOptionState,
          showEmptyPlaceholders: true,
          showIncorrect: false,
        },
        incorrectGuessState: {
          ...initialOptionData.incorrectGuessState,
        },
      };
    case "filter":
      const { category, filter, value } = action.action;
      return {
        ...state,
        filterOptionState: {
          ...state.filterOptionState,
          [category]: {
            ...state.filterOptionState[category],
            [filter]: value,
          },
        },
      };
    case "filterAll":
      return {
        ...state,
        filterOptionState: {
          sets: {
            tfc: action.action,
            rof: action.action,
            ink: action.action,
            urs: action.action,
            ssk: action.action,
          },
          colors: {
            amber: action.action,
            amethyst: action.action,
            ruby: action.action,
            steel: action.action,
            sapphire: action.action,
            emerald: action.action,
          },
          type: {
            action: action.action,
            song: action.action,
            character: action.action,
            item: action.action,
            location: action.action,
          },
        },
      };
    case "attribute":
      return {
        ...state,
        attributeOptionState: {
          ...state.attributeOptionState,
          ...action.action,
        },
      };
    default:
      return state;
  }
}
