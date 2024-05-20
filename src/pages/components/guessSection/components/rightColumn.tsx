import { useOption, useOptionDispatch } from "../../../optionsContext";
import { CardOptions, Option } from "../../../../types";
import { TextField, Autocomplete } from "@mui/material";
import { SliderComponent } from "./sliderComponent";

type Props = {
  cardOptions: CardOptions;
};

export const RightColumn = (props: Props) => {
  const { cardOptions } = props;

  const optionState = useOption()?.guessOptionState;
  const optionDispatch = useOptionDispatch();

  const isCharSelected = optionState.type !== "Character";

  return (
    <div className="flex-1">
      <Autocomplete
        disablePortal
        id="card-name"
        options={cardOptions.cardType}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Type" />}
        onChange={(event: any, newValue: Option | null) =>
          optionDispatch!({
            type: "guess",
            action: { type: newValue ? newValue.value : "" },
          })
        }
      />
      <SliderComponent label="Strength" disabled={isCharSelected} />
      <SliderComponent label="Willpower" disabled={isCharSelected} />
      <SliderComponent label="Lore" max={4} disabled={isCharSelected} />
    </div>
  );
};
