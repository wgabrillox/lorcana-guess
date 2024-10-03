import { Radio, FormLabel } from "@mui/material";
import { useOption, useOptionDispatch } from "../../../optionsContext";
import { Option, CardOptions } from "../../../../types";
import { useEffect } from "react";
import { IMAGES, colorIconBackgroundColor } from "../../../../constants";

type Props = {
  label: string;
  keyLabel?: string;
  cardOptions: CardOptions;
  showSelectNew: boolean;
  disabled: boolean;
  trueValue: string;
};

export const formLabelProps = {
  color: "text.primary",
  fontWeight: "bold",
};

export const RadioGroupComponent = (props: Props) => {
  const { label, keyLabel, cardOptions, showSelectNew, disabled, trueValue } =
    props;

  const {
    guessOptionState,
    globalOptionState,
    incorrectGuessState,
    attributeOptionState,
  } = useOption();
  const optionDispatch = useOptionDispatch();

  const controlProps = (option: Option) => ({
    checked: guessOptionState.color === option.value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      optionDispatch!({
        type: "guess",
        action: { color: event.target.value },
      }),
    value: option.value,
    name: "inkable-radio",
  });

  const optionKey = keyLabel ? keyLabel : label.toLowerCase();

  useEffect(() => {
    if (!attributeOptionState[optionKey]) {
      optionDispatch!({
        type: "guess",
        action: { [optionKey]: trueValue },
      });
    }
  }, [attributeOptionState, optionDispatch, optionKey, trueValue]);

  return (
    <>
      <FormLabel
        sx={formLabelProps}
        error={incorrectGuessState["color"] && globalOptionState.showIncorrect}
        disabled={!attributeOptionState.color}
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
            margin: 0,

            "&.Mui-checked": {
              bgcolor: colorIconBackgroundColor[color.label.toLowerCase()],
            },
          }}
          disabled={showSelectNew || disabled}
        />
      ))}
    </>
  );
};
