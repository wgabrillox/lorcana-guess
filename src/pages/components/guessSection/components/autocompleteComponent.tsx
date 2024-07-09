import { Option, CardOptions, Card } from "../../../../types";
import { useEffect, useMemo, useState } from "react";
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
  } = props;
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
  }, [optionDispatch, optionKey, preselect, selectedCard]);

  // Remove duplicate values (mainly for body text/description)
  let uniqueValues: Option[] = [];
  cardOptions[optionKey].reduce<{ [key: string]: Option }>((acc, curr) => {
    if (acc[curr.value]) {
      return acc;
    } else {
      uniqueValues.push({ value: curr.value, label: curr.label });
      return { ...acc, [curr.value]: curr };
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
      disabled={preselect !== undefined || isShowingCard}
      value={selectedValues.length ? selectedValues[0] : null}
      sx={sxProp}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={incorrectState[optionKey] && devToolOptionState.showIncorrect}
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
