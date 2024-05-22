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
    strength: [],
    willpower: [],
    color: [],
    name: [],
    bodyText: [],
    lore: [],
  });

  useEffect(() => {
    const numberOptions = Array(10)
      .fill(0)
      .map((_, i) => {
        const val = i + 1;
        return { value: val, label: val.toString() };
      });
    let cardTypes: string[] = [];
    let colorTypes: string[] = [];
    const cardOptions = cards.reduce<CardOptions>(
      (acc, card) => {
        const { type, color, name, bodyText } = card;
        if (!cardTypes.includes(type)) {
          cardTypes = [...cardTypes, type];
          acc["cardType"] = [...acc["cardType"], { value: type, label: type }];
        }

        if (!colorTypes.includes(color)) {
          colorTypes = [...colorTypes, color];
          acc["color"] = [...acc["color"], { value: color, label: color }];
        }
        acc["name"] = [...acc["name"], { value: name, label: name }];
        acc["bodyText"] = bodyText
          ? [...acc["bodyText"], { value: bodyText, label: bodyText }]
          : acc["bodyText"];
        return acc;
      },
      {
        cardType: [],
        cost: numberOptions,
        strength: numberOptions,
        willpower: numberOptions,
        color: [],
        name: [],
        bodyText: [],
        lore: Array(4)
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

  const randomCard = () => {
    const cardNum = Math.floor(Math.random() * cards.length);
    setSelectedCard(cards[cardNum]);
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
          <GuessSection
            selectedCard={selectedCard}
            cardOptions={cardOptions}
            randomCard={randomCard}
          />
        </div>
      </OptionsProvider>
    </>
  );
};
