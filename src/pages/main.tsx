import { useState } from "react";
import { Card } from "../types";
import { CardSection } from "./components/cardSection/cardSection";
import { GuessSection } from "./components/guessSection/guessSection";
import { DevTools } from "./devTools";
import { OptionsProvider, useOption } from "./optionsContext";

type Props = {
  cards: Card[];
};

export const Main = (props: Props) => {
  const { cards } = props;

  const [selectedCard, setSelectedCard] = useState<Card>(cards[0]);
  const [correctCount, setCorrectCount] = useState<number | undefined>();
  const optionState = useOption()?.guessOptionState;

  console.log("ahh", useOption());

  const checkAnswers = () => {
    let correctCount = 0;
    console.log("optionState", optionState);
    Object.keys(optionState).forEach((option) => {
      console.log("option", option);
      console.log("actual", selectedCard[option]);
      console.log("option", optionState);
      console.log("guess", optionState[option]);
      if (selectedCard[option] === optionState[option]) correctCount += 1;
    });
    setCorrectCount(correctCount);
  };

  return (
    <>
      <OptionsProvider>
        <DevTools />
        <div className="flex">
          <CardSection
            image={selectedCard?.image}
            isLocation={selectedCard.type === "Location"}
          />
          <GuessSection
            checkAnswers={checkAnswers}
            correctCount={correctCount}
          />
        </div>
      </OptionsProvider>
    </>
  );
};
