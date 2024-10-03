import { Option, CardOptions, Card } from "../../../../types";
import { useEffect, useMemo } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { useOption, useOptionDispatch } from "../../../optionsContext";

type Props = {
  label: string;
  id: string;
  cardOptions: CardOptions;
  keyLabel?: string;
  width?: number | { [key: string]: number };
  preselect?: string;
  disableOption?: boolean;
  selectedCard?: Card;
  isShowingCard: boolean;
  trueValue: string | undefined;
};

export const AutocompleteComponent = (props: Props) => {
  const {
    label,
    id,
    cardOptions,
    keyLabel,
    width,
    preselect,
    disableOption,
    selectedCard,
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

  const selectedValues = useMemo(
    () =>
      cardOptions[optionKey].filter(
        (v) => v.value === guessOptionState[optionKey]
      ),
    [cardOptions, optionKey, guessOptionState]
  );

  const sxProp = width
    ? {
        width: width,
      }
    : {};

  useEffect(() => {
    if (preselect !== undefined) {
      optionDispatch!({
        type: "guess",
        action: { [optionKey]: preselect! },
      });
    }
    if (!attributeOptionState[optionKey]) {
      optionDispatch!({
        type: "guess",
        action: { [optionKey]: trueValue! },
      });
    }
  }, [optionDispatch, optionKey, preselect, trueValue, attributeOptionState]);

  // Remove duplicate values (mainly for body text/description)
  let uniqueValues: Option[] = [];
  cardOptions[optionKey].reduce<{ [key: string]: Option }>((acc, curr) => {
    if (acc[curr.value.trim()]) {
      return acc;
    } else {
      uniqueValues.push({ value: curr.value.trim(), label: curr.label.trim() });
      return { ...acc, [curr.value.trim()]: curr };
    }
  }, {});

  const options = uniqueValues.sort((a, b) => {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();

    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }

    return 0;
  });

  return (
    <Autocomplete
      disablePortal
      id={id}
      options={options}
      getOptionDisabled={(option) =>
        disableOption!! && option.value === "Location"
      }
      disabled={
        preselect !== undefined ||
        isShowingCard ||
        !attributeOptionState[optionKey]
      }
      value={selectedValues.length ? selectedValues[0] : null}
      sx={sxProp}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={
            incorrectGuessState[optionKey] && globalOptionState.showIncorrect
          }
        />
      )}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      onChange={(event: any, newValue: Option | null) => {
        optionDispatch!({
          type: "guess",
          action: { [optionKey]: newValue ? newValue.value : "" },
        });
        event.target.blur();
      }}
      className="mb-2"
    />
  );
};
