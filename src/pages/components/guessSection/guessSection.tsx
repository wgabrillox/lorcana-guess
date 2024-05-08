import { useState } from "react";
import { InkGuessSection } from "./components/inkSection/inkGuessSection";
import { CharStatGuessSection } from "./components/charStatSection/charStatGuessSection";
import { useOption } from "../../optionsContext";
import { Card, CardOptions } from "../../../types";

type Props = {
  selectedCard: Card;
  cardOptions: CardOptions;
};

export const GuessSection = (props: Props) => {
  const { selectedCard, cardOptions } = props;
  const [correctCount, setCorrectCount] = useState<number>(0);

  const optionState = useOption()?.guessOptionState;

  const checkAnswers = () => {
    Object.keys(optionState).forEach((option) => {
      if (selectedCard[option] === optionState[option])
        setCorrectCount(correctCount + 1);
    });
  };

  return (
    <div className="py-8 relative">
      <InkGuessSection cost={cardOptions.cost} />
      <CharStatGuessSection typeOptions={cardOptions.cardType} />
      <div className="absolute bottom-0">
        {correctCount !== undefined && (
          <div className="font-bold p-2">Correct Count: {correctCount}</div>
        )}
        <div
          className="mx-2 px-2 border text-center rounded bg-blue-500 hover:bg-blue-700 text-white cursor-pointer"
          onClick={() => checkAnswers()}
        >
          Submit
        </div>
      </div>
    </div>
  );
};
