import { useState, useEffect } from "react";
import { Card, CardOptions } from "../types";
import { CardSection } from "./components/cardSection/cardSection";
import { GuessSection } from "./components/guessSection/guessSection";
import { DevTools } from "./devTools";
import { OptionsProvider } from "./optionsContext";

type Props = {
  cards: Card[];
};

export const Main = (props: Props) => {
  const { cards } = props;
  const [cardOptions, setCardOptions] = useState<CardOptions>({
    cardType: [],
    cost: [],
  });

  useEffect(() => {
    let cardTypes: string[] = [];
    const cardOptions = cards.reduce<CardOptions>(
      (acc, card) => {
        const { type } = card;
        if (!cardTypes.includes(type)) {
          cardTypes = [...cardTypes, type];
          acc["cardType"] = [...acc["cardType"], { value: type, label: type }];
        }
        return acc;
      },
      {
        cardType: [],
        cost: Array(10)
          .fill(0)
          .map((_, i) => {
            const val = i + 1;
            return { value: val, label: val.toString() };
          }),
      }
    );

    setCardOptions(cardOptions);
  }, [cards]);

  const [selectedCard, setSelectedCard] = useState<Card>(cards[0]);

  const updateSelectedCard = (num: number) => {
    setSelectedCard(cards[num]);
  };

  return (
    <>
      <OptionsProvider>
        <DevTools setSelectedCard={updateSelectedCard} />
        <div className="flex">
          <CardSection
            image={selectedCard?.image}
            isLocation={selectedCard.type === "Location"}
          />
          <GuessSection selectedCard={selectedCard} cardOptions={cardOptions} />
        </div>
      </OptionsProvider>
    </>
  );
};
