import { useState, useEffect } from "react";
import { Card, CardOptions } from "../types";
import { CardSection } from "./components/cardSection/cardSection";
import { GuessSection } from "./components/guessSection/guessSection";
import { OptionsProvider } from "./optionsContext";
import { useOptionDispatch } from "./optionsContext";
import "./main.css";
import Button from "@mui/material/Button";

type Props = {
  cards: Card[];
  cardOptions: CardOptions;
  setShowGame: () => void;
};

export const Main = (props: Props) => {
  const { cards, cardOptions, setShowGame } = props;
  const [selectedCard, setSelectedCard] = useState<Card>(
    cards[Math.floor(Math.random() * cards.length)]
  );

  const optionDispatch = useOptionDispatch();

  const randomCard = () => {
    const cardNum = Math.floor(Math.random() * cards.length);
    setSelectedCard(cards[cardNum]);
  };

  const isLocation = selectedCard.type === "Location";

  const resetCardGuesses = () => {
    randomCard();
    optionDispatch!({
      type: "reset",
    });
  };

  return (
    <>
      <div className="flex mx-auto lg:w-fit flex-col lg:flex-row lg:translate-y-1/4 mt-4 xl:mt-0">
        <div className="absolute right-0 z-10 mr-2">
          <Button
            variant="contained"
            onClick={() => {
              setShowGame();
              resetCardGuesses();
            }}
          >
            Back
          </Button>
        </div>
        <CardSection image={selectedCard?.image} isLocation={isLocation} />
        <GuessSection
          selectedCard={selectedCard}
          cardOptions={cardOptions}
          randomCard={randomCard}
        />
      </div>
    </>
  );
};
