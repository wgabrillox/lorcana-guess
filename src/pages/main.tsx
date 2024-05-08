import { useState } from "react";
import { Card } from "../types";
import { CardSection } from "./components/cardSection/cardSection";
import { GuessSection } from "./components/guessSection/guessSection";
import { DevTools } from "./devTools";
import { OptionsProvider } from "./optionsContext";

type Props = {
  cards: Card[];
};

export const Main = (props: Props) => {
  const { cards } = props;

  const [selectedCard, setSelectedCard] = useState<Card>(cards[0]);

  return (
    <>
      <OptionsProvider>
        <DevTools />
        <div className="flex">
          <CardSection
            image={selectedCard?.image}
            isLocation={selectedCard.type === "Location"}
          />
          <GuessSection selectedCard={selectedCard} />
        </div>
      </OptionsProvider>
    </>
  );
};
