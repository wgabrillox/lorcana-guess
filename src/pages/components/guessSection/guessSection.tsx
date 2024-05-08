import { useState } from "react";
import { InkGuessSection } from "./components/inkSection/inkGuessSection";
import { useOption } from "../../optionsContext";
import { Card } from "../../../types";
type Props = {
  selectedCard: Card;
};

export const GuessSection = (props: Props) => {
  const { selectedCard } = props;
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
      <InkGuessSection />
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
