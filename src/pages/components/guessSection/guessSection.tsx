import { useState } from "react";
import { useOption, useOptionDispatch } from "../../optionsContext";
import { Card, CardOptions } from "../../../types";
import Button from "@mui/material/Button";
import "./guessSection.css";
import { AutocompleteComponent } from "./components/autocompleteComponent";
import { Switch, FormLabel, Box } from "@mui/material";
import { SliderComponent } from "./components/sliderComponent";
import { RadioGroupComponent } from "./components/radioGroupComponent";

type Props = {
  selectedCard: Card;
  cardOptions: CardOptions;
  randomCard: () => void;
};

export const formLabelProps = {
  color: "text.primary",
  fontWeight: "bold",
};

export const GuessSection = (props: Props) => {
  const { selectedCard, cardOptions, randomCard } = props;

  const {
    guessOptionState,
    globalOptionState,
    incorrectGuessState,
    attributeOptionState,
  } = useOption();

  const selectedAttributes = Object.keys(attributeOptionState).filter(
    (att: string) => attributeOptionState[att] && selectedCard[att]
  );

  const [correctCount, setCorrectCount] = useState<number | null>(null);
  const [showSelectNew, setShowSelectNew] = useState<boolean>(false);

  const optionDispatch = useOptionDispatch();
  const isCharSelected = guessOptionState.type === "Character";
  const isLocSelected = guessOptionState.type === "Location";

  // On submit function to determine which selected answers are correct
  // and add to count accordingly
  const checkAnswers = () => {
    let count = 0;
    selectedAttributes.forEach((option) => {
      // continue in loop if attribute not part of select card
      if (!selectedCard[option]) return;

      const isCorrect = selectedCard[option] === guessOptionState[option];
      if (isCorrect) {
        count += 1;
      }

      optionDispatch!({
        type: "incorrectGuess",
        action: {
          [option]: !isCorrect,
        },
      });
    });
    setCorrectCount(count);

    if (count === Object.keys(selectedAttributes).length) {
      optionDispatch!({
        type: "globalState",
        action: {
          showEmptyPlaceholders: !globalOptionState.showEmptyPlaceholders,
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
    <div className="guessWrapper relative mx-auto">
      <div className="lg:absolute m-auto inset-y-0 inset-x-0 h-fit p-2">
        <div className="mb-2">
          <div className="flex flex-col py-1">
            <div className="flex flex-1 space-x-2">
              <AutocompleteComponent
                label="Name"
                id="card-name"
                cardOptions={cardOptions}
                width={{ xs: 1, sm: 1, md: 312 }}
                isShowingCard={showSelectNew}
                trueValue={selectedCard.name}
              />
              <AutocompleteComponent
                label="Type"
                id="card-type"
                cardOptions={cardOptions}
                width={{ xs: 1, sm: 1, md: 200 }}
                preselect={isLocation ? "Location" : undefined}
                disableOption={true}
                isShowingCard={showSelectNew}
                trueValue={selectedCard.type}
              />
            </div>
            <div className="flex flex-col md:flex-row flex-1 md:space-x-2">
              {/* color and inkable/cost  */}
              <div>
                <div>
                  <RadioGroupComponent
                    label={"color"}
                    cardOptions={cardOptions}
                    showSelectNew={showSelectNew}
                    disabled={!attributeOptionState.color}
                    trueValue={selectedCard.color}
                  />
                </div>
                <div className="flex flex-1 space-x-2">
                  <div className="flex-1">
                    <div className="flex flex-1">
                      <Box>
                        <FormLabel
                          sx={formLabelProps}
                          error={
                            incorrectGuessState["inkable"] &&
                            globalOptionState.showIncorrect
                          }
                          disabled={!attributeOptionState.inkable}
                        >
                          Inkable:
                        </FormLabel>
                        <Switch
                          checked={
                            attributeOptionState.inkable
                              ? guessOptionState.inkable
                              : selectedCard.inkable
                          }
                          onChange={(event: any, newValue: boolean) =>
                            optionDispatch!({
                              type: "guess",
                              action: { inkable: newValue },
                            })
                          }
                          size="small"
                          disabled={
                            showSelectNew || !attributeOptionState.inkable
                          }
                        />
                      </Box>
                    </div>
                  </div>
                  <div className="flex-1">
                    <SliderComponent
                      label="Cost"
                      width={{ xs: 168, sm: 200, md: 200 }}
                      isShowingCard={showSelectNew}
                      disabled={!attributeOptionState.cost}
                      trueValue={selectedCard.cost}
                    />
                  </div>
                </div>
              </div>
              {/* strength and will power */}
              <div className="flex flex-1 space-x-2 md:flex-col md:space-x-0">
                <div className="flex-1 content-center">
                  <SliderComponent
                    label="Strength"
                    disabled={!isCharSelected || !attributeOptionState.strength}
                    isShowingCard={showSelectNew}
                    min={0}
                    trueValue={selectedCard.strength}
                  />
                </div>
                <div className="flex-1 content-center">
                  <SliderComponent
                    label="Willpower"
                    disabled={
                      (!isCharSelected && !isLocSelected) ||
                      !attributeOptionState.willpower
                    }
                    isShowingCard={showSelectNew}
                    trueValue={selectedCard.willpower}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 space-x-0">
              <div className="md:block w-3/4 hidden"></div>
              <div className="md:block md:w-2/4 w-full">
                <div className="flex flex-1 space-x-2 md:flex-col md:space-x-0">
                  <div className="flex-1 pl-0 md:pl-1 py-1">
                    <SliderComponent
                      label="Lore"
                      max={isCharSelected ? 5 : 2}
                      min={0}
                      disabled={
                        (!isCharSelected && !isLocSelected) ||
                        !attributeOptionState.lore
                      }
                      isShowingCard={showSelectNew}
                      trueValue={selectedCard.lore}
                    />
                  </div>
                  <div className="flex-1 md:pl-1 py-1">
                    <SliderComponent
                      label={`Move Cost`}
                      keyLabel="moveCost"
                      max={3}
                      disabled={
                        !isLocSelected || !attributeOptionState.moveCost
                      }
                      labelWidth={"171px"}
                      isShowingCard={showSelectNew}
                      trueValue={selectedCard.moveCost}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AutocompleteComponent
            label="Description"
            id="card-description"
            keyLabel="bodyText"
            cardOptions={cardOptions}
            width={1}
            isShowingCard={showSelectNew}
            trueValue={selectedCard.bodyText}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1">
            <div className="flex-1 md:flex-none">
              <Button
                variant="contained"
                onClick={() => checkAnswers()}
                disabled={showSelectNew}
              >
                Submit
              </Button>
            </div>
            {correctCount !== null && (
              <div className="font-bold my-2 sm:flex-none md:flex-1 ml-2">
                Correct Count: {correctCount}/
                {Object.keys(selectedAttributes).length}
              </div>
            )}
          </div>
          <div>
            {showSelectNew ? (
              <Button
                variant="contained"
                onClick={() => resetCardGuesses()}
                sx={{
                  marginTop: { xs: 0.5, sm: 0.5, md: 0 },
                }}
              >
                Change Card
              </Button>
            ) : (
              correctCount !== null && (
                <>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      optionDispatch!({
                        type: "globalState",
                        action: {
                          showIncorrect: !globalOptionState.showIncorrect,
                        },
                      })
                    }
                    disabled={showSelectNew}
                    sx={{
                      marginRight: 1,
                    }}
                  >
                    {!globalOptionState.showIncorrect ? "Show" : "Hide"}{" "}
                    Incorrect
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      optionDispatch!({
                        type: "globalState",
                        action: {
                          showEmptyPlaceholders:
                            !globalOptionState.showEmptyPlaceholders,
                        },
                      });
                      setShowSelectNew(true);
                      setCorrectCount(null);
                    }}
                    disabled={showSelectNew}
                  >
                    Show Card
                  </Button>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
