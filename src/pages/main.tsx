import { useState } from "react";
import { Card, CardOptions } from "../types";
import { CardSection } from "./components/cardSection/cardSection";
import { GuessSection } from "./components/guessSection/guessSection";
import { useOptionDispatch, useOption } from "./optionsContext";
import "./main.css";
import Button from "@mui/material/Button";

type Props = {
  cards: Card[];
  cardOptions: CardOptions;
  setShowGame: () => void;
};

export const Main = (props: Props) => {
  const { cards, cardOptions, setShowGame } = props;

  const { filterOptionState } = useOption();

  const base = cards;
  const filteredOptions = base?.filter((card) => {
    const isSong = card.type === "Action - Song";
    let setIncluded = filterOptionState.sets[card.setId.toLowerCase()];
    let colorIncluded = filterOptionState.colors[card.color.toLowerCase()];
    let typeIncluded =
      filterOptionState.type[isSong ? "song" : card.type.toLowerCase()];
    return setIncluded && colorIncluded && typeIncluded;
  });

  const [selectedCard, setSelectedCard] = useState<Card>(
    filteredOptions[Math.floor(Math.random() * filteredOptions.length)]
  );
  const filteredCards = filteredOptions;
  const optionDispatch = useOptionDispatch();

  const randomCard = () => {
    const cardNum = Math.floor(Math.random() * filteredCards!.length);
    setSelectedCard(filteredCards![cardNum]);
  };

  const resetCardGuesses = () => {
    randomCard();
    optionDispatch!({
      type: "reset",
    });
  };

  return (
    <>
      <div className="flex mx-auto lg:w-fit flex-col lg:flex-row lg:translate-y-1/4 mt-4 xl:mt-0">
        <div className="fixed right-0 z-10 mr-2">
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
        <CardSection selectedCard={selectedCard} />
        <GuessSection
          selectedCard={selectedCard!}
          cardOptions={cardOptions}
          randomCard={randomCard}
        />
      </div>
    </>
  );
};
