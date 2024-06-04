import { useOption, useOptionDispatch } from "../../../optionsContext";
import { CardOptions } from "../../../../types";
import { TextField, Autocomplete } from "@mui/material";
import { Option } from "../../../../types";
import { AutocompleteComponent } from "./autocompleteComponent";

type Props = {
  cardOptions: CardOptions;
};

export const DescriptionSection = (props: Props) => {
  const { cardOptions } = props;
  return (
    <>
      <AutocompleteComponent
        label="Description"
        id="card-description"
        keyLabel="bodyText"
        cardOptions={cardOptions}
      />
    </>
  );
};
