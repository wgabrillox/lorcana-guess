import { useOption } from "../../../optionsContext";
import { Card, CardOptions } from "../../../../types";
import { SliderComponent } from "./sliderComponent";
import { AutocompleteComponent } from "./autocompleteComponent";

type Props = {
  cardOptions: CardOptions;
  isLocation: boolean;
  selectedCard: Card;
};

export const RightColumn = (props: Props) => {
  const { cardOptions, isLocation, selectedCard } = props;

  const optionState = useOption()?.guessOptionState;
  const isCharSelected = optionState.type === "Character";
  const isLocSelected = optionState.type === "Location";

  return (
    <div className="flex-1">
      <AutocompleteComponent
        label="Type"
        id="card-type"
        cardOptions={cardOptions}
        width={200}
        preselect={isLocation ? "Location" : undefined}
        disableOption={true}
        selectedCard={selectedCard}
      />
      <SliderComponent label="Strength" disabled={!isCharSelected} />
      <SliderComponent
        label="Willpower"
        disabled={!isCharSelected && !isLocSelected}
      />
      <SliderComponent
        label="Lore"
        max={isCharSelected ? 4 : 2}
        min={0}
        disabled={!isCharSelected && !isLocSelected}
      />
      <SliderComponent
        label={`Move Cost`}
        keyLabel="moveCost"
        max={3}
        disabled={!isLocSelected}
        width={"171px"}
      />
    </div>
  );
};
