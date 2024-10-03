import { useState, useEffect } from "react";
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
  const [filteredCards, setFilteredCards] = useState<Card[]>();
  const [selectedCard, setSelectedCard] = useState<Card>();
  const [loaded, setIsLoaded] = useState<boolean>(false);

  const { filterOptionState } = useOption();

  useEffect(() => {
    const base = cards;
    const filteredOptions = base?.filter((card) => {
      const isSong = card.type === "Action - Song";
      let setIncluded = filterOptionState.sets[card.setId.toLowerCase()];
      let colorIncluded = filterOptionState.colors[card.color.toLowerCase()];
      let typeIncluded =
        filterOptionState.type[isSong ? "song" : card.type.toLowerCase()];
      return setIncluded && colorIncluded && typeIncluded;
    });
    setFilteredCards(filteredOptions);
    const selectedCard =
      filteredOptions[Math.floor(Math.random() * filteredOptions.length)];
    setSelectedCard(selectedCard);
    setIsLoaded(true);
  }, [
    cards,
    filterOptionState.sets,
    filterOptionState.colors,
    filterOptionState.type,
    setSelectedCard,
  ]);

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
      {loaded && (
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
          <CardSection selectedCard={selectedCard} />
          <GuessSection
            selectedCard={selectedCard!}
            cardOptions={cardOptions}
            randomCard={randomCard}
          />
        </div>
      )}
    </>
  );
};
