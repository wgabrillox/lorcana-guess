import { useState } from "react";
import { useOption, useOptionDispatch } from "../../optionsContext";
import { Option, Card, CardOptions } from "../../../types";
import { genericAnswers, IMAGES } from "../../../constants";
import Button from "@mui/material/Button";
import "./guessSection.css";
import { AutocompleteComponent } from "./components/autocompleteComponent";
import { Switch, Radio, FormControl, FormLabel, Box } from "@mui/material";
import { SliderComponent } from "./components/sliderComponent";

type Props = {
  selectedCard: Card;
  cardOptions: CardOptions;
  randomCard: () => void;
};

export const colorIconBackgroundColor: { [key: string]: string } = {
  amber: "rgba(244, 179, 1, 0.3);",
  amethyst: "rgba(128, 56, 123, 0.3);",
  ruby: "rgba(210, 11, 46, 0.3)",
  steel: "rgba(159, 169, 179, 0.3)",
  sapphire: "rgba(2, 137, 195, 0.3)",
  emerald: "rgba(41, 138, 52, 0.3)",
};

export const formLabelProps = {
  color: "text.primary",
  fontWeight: "bold",
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
  const isCharSelected = optionState.type === "Character";
  const isLocSelected = optionState.type === "Location";

  const controlProps = (option: Option) => ({
    checked: optionState.color === option.value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      optionDispatch!({
        type: "guess",
        action: { color: event.target.value },
      }),
    value: option.value,
    name: "inkable-radio",
  });

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
              />
              <AutocompleteComponent
                label="Type"
                id="card-type"
                cardOptions={cardOptions}
                width={{ xs: 1, sm: 1, md: 200 }}
                preselect={isLocation ? "Location" : undefined}
                disableOption={true}
                selectedCard={selectedCard}
              />
            </div>
            <div className="flex flex-col md:flex-row flex-1 md:space-x-2">
              {/* color and inkable/cost */}
              <div>
                <div>
                  <FormControl>
                    <div>
                      <FormLabel
                        sx={formLabelProps}
                        error={
                          incorrectState["color"] && devToolState.showIncorrect
                        }
                      >
                        Color:
                      </FormLabel>
                      {cardOptions.color.map((color) => (
                        <Radio
                          {...controlProps(color)}
                          key={color.value}
                          checkedIcon={
                            <img
                              src={IMAGES[color.label.toLowerCase()]}
                              alt={`${color.label} icon`}
                            />
                          }
                          icon={
                            <img
                              src={IMAGES[color.label.toLowerCase()]}
                              alt={`${color.label} icon`}
                            />
                          }
                          sx={{
                            width: 44,
                            height: 44,

                            "&.Mui-checked": {
                              bgcolor:
                                colorIconBackgroundColor[
                                  color.label.toLowerCase()
                                ],
                            },
                          }}
                        />
                      ))}
                    </div>
                  </FormControl>
                </div>
                <div className="flex flex-1 space-x-2">
                  <div className="flex-1">
                    <div className="flex flex-1">
                      <Box>
                        <FormLabel
                          sx={formLabelProps}
                          error={
                            incorrectState["inkable"] &&
                            devToolState.showIncorrect
                          }
                        >
                          Inkable:
                        </FormLabel>
                        <Switch
                          checked={optionState.inkable}
                          onChange={(event: any, newValue: boolean) =>
                            optionDispatch!({
                              type: "guess",
                              action: { inkable: newValue },
                            })
                          }
                          size="small"
                        />
                      </Box>
                    </div>
                  </div>
                  <div className="flex-1">
                    <SliderComponent
                      label="Cost"
                      width={{ xs: 168, sm: 200, md: 200 }}
                    />
                  </div>
                </div>
              </div>
              {/* strength and will power */}
              <div className="flex flex-1 space-x-2 md:flex-col md:space-x-0">
                <div className="flex-1 content-center">
                  <SliderComponent
                    label="Strength"
                    disabled={!isCharSelected}
                  />
                </div>
                <div className="flex-1 content-center">
                  <SliderComponent
                    label="Willpower"
                    disabled={!isCharSelected && !isLocSelected}
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
                      max={isCharSelected ? 4 : 2}
                      min={0}
                      disabled={!isCharSelected && !isLocSelected}
                    />
                  </div>
                  <div className="flex-1 md:pl-1 py-1">
                    <SliderComponent
                      label={`Move Cost`}
                      keyLabel="moveCost"
                      max={3}
                      disabled={!isLocSelected}
                      labelWidth={"171px"}
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
                Correct Count: {correctCount}/{Object.keys(cardKeys).length}
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
                        type: "devTool",
                        action: {
                          showIncorrect: !devToolState.showIncorrect,
                        },
                      })
                    }
                    disabled={showSelectNew}
                    sx={{
                      marginRight: 1,
                    }}
                  >
                    {!devToolState.showIncorrect ? "Show" : "Hide"} Incorrect
                  </Button>
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
