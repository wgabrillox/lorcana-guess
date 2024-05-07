import { useState } from "react";
import { Card, SelectedOptions, SelectedDevTools } from "../types";
import { CardSection } from "./components/cardSection/cardSection";
import { GuessSection } from "./components/guessSection/guessSection";
import { DevTools } from "./devTools";

type Props = {
  cards: Card[];
};

export const Main = (props: Props) => {
  const { cards } = props;
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    inkable: true,
    cost: 0,
  });
  const [selectedCard, setSelectedCard] = useState<Card>(cards[0]);
  const [selectedDevTools, setSelectedDevTools] = useState<SelectedDevTools>({
    showEmptyPlaceholders: true,
    selectedCardNumber: 0,
  });
  const [correctCount, setCorrectCount] = useState<number | undefined>();

  const updateSelectedOptions = (updatedOption: {
    [key: string]: boolean | number;
  }) => {
    setSelectedOptions({ ...selectedOptions, ...updatedOption });
  };

  const updateSelectedDevTools = (updatedOption: {
    [key: string]: boolean | number;
  }) => {
    const [key, value] = Object.entries(updatedOption)[0];
    if (key === "selectedCardNumber") {
      setSelectedCard(cards[value as number]);
    }
    setSelectedDevTools({ ...selectedDevTools, ...updatedOption });
  };
  console.log("selectedCard", selectedCard);

  const checkAnswers = () => {
    let correctCount = 0;
    Object.keys(selectedOptions).forEach((option) => {
      console.log("option", option);
      console.log("actual", selectedCard[option]);
      console.log("guess", selectedOptions[option]);
      if (selectedCard[option] === selectedOptions[option]) correctCount += 1;
    });
    setCorrectCount(correctCount);
  };

  return (
    // <div>{cards && cards.map((card, idx) => <p key={idx}>{card.name}</p>)}</div>
    <div>
      <DevTools
        selectedDevTools={selectedDevTools}
        setSelectedDevTools={updateSelectedDevTools}
      />
      <div className="flex">
        <CardSection
          image={selectedCard?.image}
          isLocation={selectedCard.type === "Location"}
          selectedDevTools={selectedDevTools}
          selectedOptions={selectedOptions}
        />
        <GuessSection
          selectedOptions={selectedOptions}
          setSelectedOptions={updateSelectedOptions}
          checkAnswers={checkAnswers}
          correctCount={correctCount}
        />
      </div>
    </div>
  );
};
