import { useState } from "react";
import { Card, SelectedOptions } from "../types";
import { CardSection } from "./cardSection";
import { GuessSection } from "./guessSection";
type Props = {
  cards: Card[];
};

export const Main = (props: Props) => {
  const { cards } = props;
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    inkable: true,
  });

  const updateSelectedOptions = (updatedOption: { [key: string]: boolean }) => {
    setSelectedOptions({ ...selectedOptions, ...updatedOption });
  };

  return (
    // <div>{cards && cards.map((card, idx) => <p key={idx}>{card.name}</p>)}</div>
    <div className="flex">
      <CardSection image={cards[0].image} selectedOptions={selectedOptions} />
      <GuessSection
        card={cards[0]}
        selectedOptions={selectedOptions}
        setSelectedOptions={updateSelectedOptions}
      />
    </div>
  );
};
