import { useState } from "react";
import { Card, SelectedOptions, SelectedDevTools } from "../types";
import { CardSection } from "./cardSection";
import { GuessSection } from "./guessSection";
import { DevTools } from "./devTools";

type Props = {
  cards: Card[];
};

export const Main = (props: Props) => {
  const { cards } = props;
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    inkable: true,
  });
  const [selectedCard, setSelectedCard] = useState<Card>(cards[0]);
  const [selectedDevTools, setSelectedDevTools] = useState<SelectedDevTools>({
    showEmptyPlaceholders: true,
    selectedCardNumber: 0,
  });

  const updateSelectedOptions = (updatedOption: { [key: string]: boolean }) => {
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
          selectedDevTools={selectedDevTools}
          selectedOptions={selectedOptions}
        />
        <GuessSection
          card={selectedCard}
          selectedOptions={selectedOptions}
          setSelectedOptions={updateSelectedOptions}
        />
      </div>
    </div>
  );
};
