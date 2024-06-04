import { Box, FormLabel } from "@mui/material";
import { useOption, useOptionDispatch } from "../../../optionsContext";
import Slider from "./slider";

type Props = {
  label: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  keyLabel?: string;
  width?: string;
};

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

  const selectedValue = optionState[optionKey];

  const markMax = max ? max - 1 : 9;
  const marks = Array.from({ length: markMax - 1 }, (_, i) => ({
    value: i + 1 + 1,
    label: "",
  }));

  return (
    <Box sx={{ width: 200 }} className="flex my-1">
      <FormLabel
        disabled={disabled}
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          mr: "20px",
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
        marks={marks.length ? marks : [{ value: 1, label: "" }]}
        onChange={handleChange}
        value={selectedValue as number}
        disabled={disabled}
      />
    </Box>
  );
};
