import { createContext, useContext, useReducer } from "react";
import { OptionState, OptionActions } from "../types";

const initialOptionData = {
  guessOptionState: {
    inkable: true,
    cost: 0,
    type: "",
    strength: 0,
    willpower: 0,
    color: "Amber",
    name: "",
    bodyText: "",
    lore: 0,
  },
  devToolOptionState: {
    showEmptyPlaceholders: true,
    cardNumber: 0,
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

  console.log("optionState", optionState);

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
    default:
      return state;
  }
}
