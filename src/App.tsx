import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Set, CardOptions } from "./types";
import { Main } from "./pages/main";
import { SplashScreen } from "./pages/components/splashScreen/splashScreen";
import { OptionsProvider } from "./pages/optionsContext";

axios.interceptors.response.use(
  function (response) {
    const lowerize = (card: { [key: string]: any }) =>
      Object.keys(card).reduce<{ [key: string]: any }>((acc, k) => {
        const split = k.toLowerCase().split("_");
        const newKey = split.reduce((acc, curr, idx) =>
          idx === 0
            ? (acc += curr)
            : (acc += curr.charAt(0).toUpperCase() + curr.substring(1))
        );
        return { ...acc, [newKey]: card[k] };
      }, {});

    const transformedResult = response.data.map((card: Card) => lowerize(card));
    response.data = transformedResult;
    return response;
  },
  function (error) {}
);

export default function App() {
  const [cards, setCards] = useState<Card[] | null>();
  const [sets, setSets] = useState<Set[] | null>(null);

  const [cardOptions, setCardOptions] = useState<CardOptions>({
    type: [],
    color: [],
    name: [],
    bodyText: [],
  });

  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    axios.get("https://api.lorcana-api.com/bulk/cards").then((res) => {
      setCards(res.data);
    });
    axios.get("https://api.lorcana-api.com/bulk/sets").then((res) => {
      setSets(
        res.data
          .filter((set: Set) => set.setId !== "QU1")
          .sort((a: Set, b: Set) => {
            const valueA = a.setNum;
            const valueB = b.setNum;

            if (valueA < valueB) {
              return -1;
            }
            if (valueA > valueB) {
              return 1;
            }

            return 0;
          })
      );
    });
  }, []);

  useEffect(() => {
    if (cards) {
      let cardTypes: string[] = [];
      const cardOptions = cards.reduce<CardOptions>(
        (acc, card) => {
          const { type, name, bodyText } = card;
          if (!cardTypes.includes(type)) {
            cardTypes = [...cardTypes, type];
            acc["type"] = [...acc["type"], { value: type, label: type }];
          }

          acc["name"] = [...acc["name"], { value: name, label: name }];
          acc["bodyText"] = bodyText
            ? [...acc["bodyText"], { value: bodyText, label: bodyText }]
            : acc["bodyText"];
          return acc;
        },
        {
          type: [],
          color: [
            { value: "Amber", label: "Amber" },
            { value: "Amethyst", label: "Amethyst" },
            { value: "Ruby", label: "Ruby" },
            { value: "Steel", label: "Steel" },
            { value: "Sapphire", label: "Sapphire" },
            { value: "Emerald", label: "Emerald" },
          ],
          name: [],
          bodyText: [],
        }
      );

      setCardOptions(cardOptions);
    }
  }, [cards]);

  return (
    <>
      <OptionsProvider>
        {cards && sets ? (
          showGame ? (
            <Main
              cards={cards}
              cardOptions={cardOptions}
              setShowGame={() => setShowGame(false)}
            />
          ) : (
            <SplashScreen sets={sets} setShowGame={() => setShowGame(true)} />
          )
        ) : (
          <div>Loading...</div>
        )}
      </OptionsProvider>
    </>
  );
}
