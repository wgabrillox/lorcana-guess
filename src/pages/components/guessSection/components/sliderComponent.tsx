import { Box, FormLabel } from "@mui/material";
import { useOption, useOptionDispatch } from "../../../optionsContext";
import Slider from "./slider";

type Props = {
  label: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  keyLabel?: string;
  labelWidth?: string;
  width?: number | { [key: string]: number };
  isShowingCard: boolean;
  trueValue: number | undefined;
};

export const SliderComponent = (props: Props) => {
  const {
    label,
    min,
    max,
    disabled,
    keyLabel,
    labelWidth,
    isShowingCard,
    trueValue,
  } = props;

  const {
    guessOptionState,
    globalOptionState,
    incorrectGuessState,
    attributeOptionState,
  } = useOption();
  const optionDispatch = useOptionDispatch();

  const optionKey = keyLabel ? keyLabel : label.toLowerCase();

  const handleChange = (event: Event, newValue: number | number[]) => {
    optionDispatch!({
      type: "guess",
      action: { [optionKey]: newValue as number },
    });
  };

  if (!attributeOptionState[optionKey]) {
    optionDispatch!({
      type: "guess",
      action: { [optionKey]: trueValue as number },
    });
  }

  if (!trueValue) {
    optionDispatch!({
      type: "guess",
      action: { [optionKey]: undefined },
    });
  }

  const selectedValue =
    guessOptionState[optionKey] !== undefined
      ? guessOptionState[optionKey]
      : null;

  const markMax = max ? max - 1 : 9;
  const marks = Array.from({ length: markMax - 1 }, (_, i) => ({
    value: i + 1 + 1,
    label: "",
  }));

  return (
    <Box className="flex">
      <FormLabel
        disabled={disabled}
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          mr: "20px",
          width: {
            sm: "default",
            md: `${labelWidth ? labelWidth : "default"}`,
          },
        }}
        error={
          incorrectGuessState[optionKey] && globalOptionState.showIncorrect
        }
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
        disabled={disabled || isShowingCard}
      />
    </Box>
  );
};
