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
  randomCard: () => void;
};

export const GuessSection = (props: Props) => {
  const { selectedCard, cardOptions, randomCard } = props;
  const cardKeys = genericAnswers.reduce(
    (acc, curr) =>
      selectedCard[curr] !== undefined
        ? { ...acc, [curr]: selectedCard[curr] }
        : acc,
    {}
  );
  const [correctCount, setCorrectCount] = useState<number | null>(null);
  const [showSelectNew, setShowSelectNew] = useState<boolean>(false);

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

    if (count === Object.keys(cardKeys).length) {
      optionDispatch!({
        type: "devTool",
        action: {
          showEmptyPlaceholders: !devToolState.showEmptyPlaceholders,
        },
      });
      setShowSelectNew(true);
    }
  };

  const resetCardGuesses = () => {
    randomCard();
    setShowSelectNew(false);
    setCorrectCount(null);
    optionDispatch!({
      type: "reset",
    });
  };

  const isLocation = selectedCard.type === "Location";

  return (
    <div className="relative" style={{ width: "537px" }}>
      <div className="xl:absolute m-auto inset-y-0 inset-x-0 h-fit p-2">
        <div className="mb-2">
          <div className="flex">
            <LeftColumn cost={cardOptions.cost} cardOptions={cardOptions} />
            <RightColumn
              cardOptions={cardOptions}
              isLocation={isLocation}
              selectedCard={selectedCard}
            />
          </div>
          <DescriptionSection cardOptions={cardOptions} />
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => checkAnswers()}
            disabled={showSelectNew}
          >
            Submit
          </Button>
          {correctCount !== null && (
            <div>
              {!showSelectNew && (
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
                      disabled={showSelectNew}
                    >
                      {!devToolState.showIncorrect ? "Show" : "Hide"} Incorrect
                    </Button>
                  </span>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      optionDispatch!({
                        type: "devTool",
                        action: {
                          showEmptyPlaceholders:
                            !devToolState.showEmptyPlaceholders,
                        },
                      });
                      setShowSelectNew(true);
                    }}
                    disabled={showSelectNew}
                  >
                    Show Card
                  </Button>
                </div>
              )}
              {showSelectNew && (
                <div className="mt-2">
                  <Button
                    variant="contained"
                    onClick={() => resetCardGuesses()}
                  >
                    Change Card
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
