import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./types";
import { Main } from "./pages/main";
import { mockData, mockDataLocations } from "./constants";

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
  // const [cards, setCards] = useState(mockData);
  const [cards, setCards] = useState([...mockData, ...mockDataLocations]);

  // useEffect(() => {
  //   // axios.get("https://api.lorcana-api.com/cards/all").then((res) => {
  //   //   setCards(res.data);
  //   // });
  //   setCards([mock]);
  // }, []);
  return <Main cards={cards} />;
}
