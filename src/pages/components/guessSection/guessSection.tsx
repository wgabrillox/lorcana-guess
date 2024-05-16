import { useState } from "react";
import { DescriptionSection } from "./components/descriptionSection";
import { useOption } from "../../optionsContext";
import { Card, CardOptions } from "../../../types";
import { LeftColumn } from "./components/leftColumn";
import { RightColumn } from "./components/rightColumn";
type Props = {
  selectedCard: Card;
  cardOptions: CardOptions;
};

export const GuessSection = (props: Props) => {
  const { selectedCard, cardOptions } = props;
  const [correctCount, setCorrectCount] = useState<number>(0);

  const optionState = useOption()?.guessOptionState;
  const cardKeys = Object.keys(selectedCard);

  const checkAnswers = () => {
    let count = 0;
    cardKeys.forEach((option) => {
      if (selectedCard[option] === optionState[option]) {
        console.log("option", option);
        count += 1;
      }
    });
    setCorrectCount(count);
  };

  return (
    <div className="py-8 relative">
      <div className="flex">
        {/* <InkGuessSection cost={cardOptions.cost} /> */}
        {/* <CharStatGuessSection cardOptions={cardOptions} /> */}
        <LeftColumn cost={cardOptions.cost} cardOptions={cardOptions} />
        <RightColumn cardOptions={cardOptions} />
      </div>
      <DescriptionSection cardOptions={cardOptions} />
      <div>
        {correctCount !== undefined && (
          <div className="font-bold p-2">
            Correct Count: {correctCount}/{cardKeys.length}
          </div>
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
