import { Option, CardOptions } from "../../../../types";
import { IMAGES } from "../../../../constants";
import { Box, FormLabel } from "@mui/material";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { useOption, useOptionDispatch } from "../../../optionsContext";

type Props = {
  label: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  keyLabel?: string;
  width?: string;
};

interface ThumbComponentProps extends React.HTMLAttributes<unknown> {}

export const SliderComponent = (props: Props) => {
  const { label, min, max, disabled, keyLabel, width } = props;
  const optionState = useOption()?.guessOptionState;
  const devToolState = useOption()?.devToolOptionState;
  const incorrectState = useOption()?.incorrectGuessState;
  const optionDispatch = useOptionDispatch();

  const optionKey = keyLabel ? keyLabel : label.toLowerCase();

  const handleChange = (event: Event, newValue: number | number[]) => {
    optionDispatch!({
      type: "guess",
      action: { [optionKey]: newValue as number },
    });
  };

  function ThumbComponent(props: ThumbComponentProps) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="font-bold text-lorcana-gold">
          {optionState[optionKey]}
        </span>
      </SliderThumb>
    );
  }

  const selectedValue = optionState[label.toLowerCase()];

  return (
    <Box sx={{ width: 200 }} className="flex my-1">
      <FormLabel
        disabled={disabled}
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          mr: "20px",
          mt: "4px",
          width: `${width ? width : "default"}`,
        }}
        error={incorrectState[optionKey] && devToolState.showIncorrect}
      >
        {label}:
      </FormLabel>
      <Slider
        min={min !== undefined ? min : 1}
        max={max ? max : 10}
        defaultValue={min !== undefined ? min : 1}
        marks
        onChange={handleChange}
        slots={{ thumb: ThumbComponent }}
        value={selectedValue as number}
        sx={{
          "& .MuiSlider-thumb": {
            height: 27,
            width: 27,
            backgroundColor: `${disabled ? "#696969" : "#000"}`,
            border: "2px solid #b39961",
            "&:hover": {
              boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
            },
          },
          "& .MuiSlider-rail": {
            color: "#000",
          },
        }}
        disabled={disabled}
      />
    </Box>
  );
};
