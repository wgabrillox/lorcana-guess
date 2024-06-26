import { useState, useEffect } from "react";
import { Card, CardOptions } from "../types";
import { CardSection } from "./components/cardSection/cardSection";
import { GuessSection } from "./components/guessSection/guessSection";
import { DevTools } from "./devTools";
import { OptionsProvider } from "./optionsContext";
import "./main.css";

type Props = {
  cards: Card[];
};

export const Main = (props: Props) => {
  const { cards } = props;
  const [cardOptions, setCardOptions] = useState<CardOptions>({
    type: [],
    color: [],
    name: [],
    bodyText: [],
  });

  useEffect(() => {
    let cardTypes: string[] = [];
    let colorTypes: string[] = [];
    const cardOptions = cards.reduce<CardOptions>(
      (acc, card) => {
        const { type, color, name, bodyText } = card;
        if (!cardTypes.includes(type)) {
          cardTypes = [...cardTypes, type];
          acc["type"] = [...acc["type"], { value: type, label: type }];
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
        type: [],
        color: [],
        name: [],
        bodyText: [],
      }
    );

    setCardOptions(cardOptions);
  }, [cards]);

  const [selectedCard, setSelectedCard] = useState<Card>(
    cards[Math.floor(Math.random() * cards.length)]
  );

  const updateSelectedCard = (num: number) => {
    setSelectedCard(cards[num]);
  };

  const randomCard = () => {
    const cardNum = Math.floor(Math.random() * cards.length);
    setSelectedCard(cards[cardNum]);
  };

  const isLocation = selectedCard.type === "Location";

  return (
    <>
      <OptionsProvider>
        {/* <DevTools setSelectedCard={updateSelectedCard} /> */}
        <div className="flex mx-auto lg:w-fit flex-col lg:flex-row lg:translate-y-1/4 mt-4 xl:mt-0">
          <CardSection image={selectedCard?.image} isLocation={isLocation} />
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
