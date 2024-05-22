import { Option, CardOptions } from "../../../../types";
import { useMemo } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { useOption, useOptionDispatch } from "../../../optionsContext";

type Props = {
  label: string;
  id: string;
  cardOptions: CardOptions;
  keyLabel?: string;
  width?: number;
};

export const AutocompleteComponent = (props: Props) => {
  const { label, id, cardOptions, keyLabel, width } = props;
  const optionState = useOption()?.guessOptionState;
  const devToolOptionState = useOption()?.devToolOptionState;
  const incorrectState = useOption()?.incorrectGuessState;
  const optionDispatch = useOptionDispatch();

  const optionKey = keyLabel ? keyLabel : label.toLowerCase();

  const selectedValues = useMemo(
    () =>
      cardOptions[optionKey].filter((v) => v.value === optionState[optionKey]),
    [cardOptions, optionKey, optionState]
  );

  const sxProp = width
    ? {
        width: { width },
      }
    : {};

  return (
    <Autocomplete
      disablePortal
      id={id}
      options={cardOptions[optionKey].sort((a, b) => {
        const valueA = a.value.toUpperCase();
        const valueB = b.value.toUpperCase();

        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }

        return 0;
      })}
      value={selectedValues[0] ? selectedValues[0] : null}
      sx={sxProp}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={incorrectState[optionKey] && devToolOptionState.showIncorrect}
        />
      )}
      onChange={(event: any, newValue: Option | null) =>
        optionDispatch!({
          type: "guess",
          action: { [optionKey]: newValue ? newValue.value : "" },
        })
      }
      className="mb-2"
    />
  );
};
