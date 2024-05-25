import { useOption } from "../../../optionsContext";
import { CardOptions } from "../../../../types";
import { SliderComponent } from "./sliderComponent";
import { AutocompleteComponent } from "./autocompleteComponent";

type Props = {
  cardOptions: CardOptions;
};

export const RightColumn = (props: Props) => {
  const { cardOptions } = props;

  const optionState = useOption()?.guessOptionState;
  const isCharSelected = optionState.type !== "Character";

  return (
    <div className="flex-1">
      <AutocompleteComponent
        label="Type"
        id="card-type"
        cardOptions={cardOptions}
        width={200}
      />
      <SliderComponent label="Strength" disabled={isCharSelected} />
      <SliderComponent label="Willpower" disabled={isCharSelected} />
      <SliderComponent label="Lore" max={4} min={0} disabled={isCharSelected} />
    </div>
  );
};
