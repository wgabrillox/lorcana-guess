import { useState } from "react";
import { DescriptionSection } from "./components/descriptionSection";
import { useOption, useOptionDispatch } from "../../optionsContext";
import { Card, CardOptions } from "../../../types";
import { LeftColumn } from "./components/leftColumn";
import { RightColumn } from "./components/rightColumn";
import { genericAnswers } from "../../../constants";
import Button from "@mui/material/Button";

type Props = {
  selectedCard: Card;
  cardOptions: CardOptions;
};

export const GuessSection = (props: Props) => {
  const { selectedCard, cardOptions } = props;
  const cardKeys = genericAnswers.reduce(
    (acc, curr) =>
      selectedCard[curr] !== undefined
        ? { ...acc, [curr]: selectedCard[curr] }
        : acc,
    {}
  );
  const [correctCount, setCorrectCount] = useState<number | null>(null);

  const optionState = useOption()?.guessOptionState;
  const devToolState = useOption()?.devToolOptionState;
  const incorrectState = useOption()?.incorrectGuessState;
  const optionDispatch = useOptionDispatch();

  const checkAnswers = () => {
    let count = 0;
    Object.keys(cardKeys).forEach((option) => {
      if (selectedCard[option] === optionState[option]) {
        count += 1;
        optionDispatch!({
          type: "incorrectGuess",
          action: {
            [option]: false,
          },
        });
      } else {
        optionDispatch!({
          type: "incorrectGuess",
          action: {
            [option]: true,
          },
        });
      }
    });
    setCorrectCount(count);
  };

  return (
    <div className="py-8 relative">
      <div className="mb-2">
        <div className="flex">
          <LeftColumn cost={cardOptions.cost} cardOptions={cardOptions} />
          <RightColumn cardOptions={cardOptions} />
        </div>
        <DescriptionSection cardOptions={cardOptions} />
      </div>
      <div>
        <Button variant="contained" onClick={() => checkAnswers()}>
          Submit
        </Button>
        {correctCount !== null && (
          <div>
            <div className="font-bold my-2">
              Correct Count: {correctCount}/{Object.keys(cardKeys).length}
            </div>
            <span className="mr-2">
              <Button
                variant="outlined"
                onClick={() =>
                  optionDispatch!({
                    type: "devTool",
                    action: {
                      showIncorrect: !devToolState.showIncorrect,
                    },
                  })
                }
              >
                {!devToolState.showIncorrect ? "Show" : "Hide"} Incorrect
              </Button>
            </span>
            <Button
              variant="outlined"
              onClick={() =>
                optionDispatch!({
                  type: "devTool",
                  action: {
                    showEmptyPlaceholders: !devToolState.showEmptyPlaceholders,
                  },
                })
              }
            >
              Show Card
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
