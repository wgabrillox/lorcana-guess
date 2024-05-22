// import Select from "react-select";
import { useOption, useOptionDispatch } from "../../../optionsContext";
import { Option, CardOptions } from "../../../../types";
import {
  TextField,
  Autocomplete,
  Switch,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
} from "@mui/material";
import { IMAGES } from "../../../../constants";
import { SliderComponent } from "./sliderComponent";

type Props = {
  cost: Option[];
  cardOptions: CardOptions;
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

export const LeftColumn = (props: Props) => {
  const { cardOptions } = props;
  const optionState = useOption()?.guessOptionState;
  const devToolOptionState = useOption()?.devToolOptionState;
  const incorrectState = useOption()?.incorrectGuessState;
  const optionDispatch = useOptionDispatch();

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

  console.log("incorrectState", incorrectState);

  return (
    <div className="flex-column mr-4">
      <Autocomplete
        disablePortal
        id="card-name"
        // options={}
        options={cardOptions.name.sort()}
        sx={{ width: 320 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Card Name"
            error={incorrectState["name"] && devToolOptionState.showIncorrect}
          />
        )}
        onChange={(event: any, newValue: Option | null) =>
          optionDispatch!({
            type: "guess",
            action: { name: newValue ? newValue.value : "" },
          })
        }
        className="mb-2"
        filterOptions={(options, state) => {
          console.log("options", options);
          console.log("state", state);
          return options;
        }}
      />
      <div>
        <FormControl>
          <div>
            <FormLabel
              sx={formLabelProps}
              error={
                incorrectState["color"] && devToolOptionState.showIncorrect
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
                  width: 45,
                  height: 45,
                  padding: 1,
                  "&.Mui-checked": {
                    bgcolor:
                      colorIconBackgroundColor[color.label.toLowerCase()],
                  },
                }}
              />
            ))}
          </div>
        </FormControl>
      </div>
      <FormControl
        error={incorrectState["inkable"] && devToolOptionState.showIncorrect}
      >
        <div className="flex">
          <div>
            <FormLabel sx={formLabelProps}>Inkable:</FormLabel>
            <Switch
              defaultChecked
              onChange={(event: any, newValue: boolean) =>
                optionDispatch!({
                  type: "guess",
                  action: { inkable: newValue },
                })
              }
            />
          </div>
          <div>
            <SliderComponent label="Cost" />
          </div>
        </div>
      </FormControl>
    </div>
  );
};
