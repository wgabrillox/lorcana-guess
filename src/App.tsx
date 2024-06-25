import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Set, CardOptions, FilterOptions, Filter } from "./types";
import { Main } from "./pages/main";
import { SplashScreen } from "./pages/splashScreen";
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
  const [baseCards, setBaseCards] = useState<Card[] | null>();
  const [cards, setCards] = useState<Card[] | null>();
  const [showError, setShowError] = useState<boolean>(false);
  const [sets, setSets] = useState<Set[] | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({
    sets: {
      tfc: true,
      rof: true,
      ink: true,
      urs: true,
    },
    colors: {
      amber: true,
      amethyst: true,
      ruby: true,
      steel: true,
      sapphire: true,
      emerald: true,
    },
    type: {
      action: true,
      song: true,
      character: true,
      item: true,
      location: true,
    },
  });

  const [cardOptions, setCardOptions] = useState<CardOptions>({
    type: [],
    color: [],
    name: [],
    bodyText: [],
  });

  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    axios.get("https://api.lorcana-api.com/cards/all").then((res) => {
      setCards(res.data);
      setBaseCards(res.data);
    });
    axios.get("https://api.lorcana-api.com/sets/all").then((res) => {
      setSets(res.data);
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

  const filterOptions = () => {
    const base = baseCards;
    const filteredCards = base?.filter((card) => {
      const isSong = card.type === "Action - Song";
      let setIncluded = selectedFilters["sets"][card.setId.toLowerCase()];
      let colorIncluded = selectedFilters["colors"][card.color.toLowerCase()];
      let typeIncluded =
        selectedFilters["type"][isSong ? "song" : card.type.toLowerCase()];
      return setIncluded && colorIncluded && typeIncluded;
    });

    if (filteredCards?.length) {
      setCards(filteredCards);
      setShowError(false);
      setShowGame(true);
    } else {
      setShowError(true);
    }
  };

  const updateFilter = ({ category, filter, value }: Filter) =>
    setSelectedFilters({
      ...selectedFilters,
      [category]: {
        ...selectedFilters[category],
        [filter]: value,
      },
    });

  const selectAllFilters = (toggle: boolean) => {
    const newState = Object.keys(selectedFilters).reduce<FilterOptions>(
      (acc, category) => {
        const newCategory = Object.keys(selectedFilters[category]).reduce(
          (acc, filter) => ({
            ...acc,
            [filter]: toggle,
          }),
          {}
        );
        return {
          ...acc,
          [category]: newCategory,
        };
      },
      {} as FilterOptions
    );

    setSelectedFilters(newState);
  };

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
            <SplashScreen
              sets={sets}
              updateFilter={updateFilter}
              selectedFilters={selectedFilters}
              selectAllFilters={selectAllFilters}
              setShowGame={filterOptions}
              showError={showError}
            />
          )
        ) : (
          <div>Loading...</div>
        )}
      </OptionsProvider>
    </>
  );
}
