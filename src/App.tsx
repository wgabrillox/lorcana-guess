import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./types";
import { Main } from "./pages/main";

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
  const mock = [
    {
      artist: "Agnes Christianson",
      setName: "Into the Inklands",
      setNum: 3,
      color: "Amber",
      image: "https://lorcana-api.com/images/99_puppies/99_puppies-large.png",
      cost: 5,
      inkable: false,
      name: "99 Puppies",
      type: "Action",
      rarity: "Uncommon",
      flavorText:
        '"Two, four, six, plus three is nine, plus two is 11 . . ."\n-Roger',
      cardNum: 24,
      bodyText:
        "Whenever one of your characters quests this turn, gain 1 lore.",
      setId: "INK",
    },
    {
      artist: "Andreas Rocha",
      setName: "Into the Inklands",
      setNum: 3,
      color: "Ruby",
      image:
        "https://lorcana-api.com/images/agrabah/marketplace/agrabah-marketplace-large.png",
      cost: 3,
      inkable: true,
      name: "Agrabah - Marketplace",
      moveCost: 1,
      type: "Location",
      lore: 2,
      rarity: "Common",
      flavorText:
        '"Welcome to Agrabah, city of mystery, of enchantment, and the finest merchandise this side of the river."\n-Merchant',
      cardNum: 134,
      willpower: 5,
      setId: "INK",
    },
    {
      artist: "Randy Bishop",
      setName: "The First Chapter",
      classifications: "Storyborn, Hero",
      setNum: 1,
      color: "Steel",
      image:
        "https://lorcana-api.com/images/aladdin/cornered_swordsman/aladdin-cornered_swordsman-large.png",
      cost: 2,
      inkable: true,
      name: "Aladdin - Cornered Swordsman",
      type: "Character",
      lore: 2,
      rarity: "Common",
      flavorText:
        '"Oh ho! So the street rat found a sword and a backbone!" \n-Razoul',
      cardNum: 171,
      willpower: 1,
      strength: 2,
      setId: "TFC",
    },
  ];

  const [cards, setCards] = useState(mock);

  // useEffect(() => {
  //   // axios.get("https://api.lorcana-api.com/cards/all").then((res) => {
  //   //   setCards(res.data);
  //   // });
  //   setCards([mock]);
  // }, []);
  return <Main cards={cards} />;
}
