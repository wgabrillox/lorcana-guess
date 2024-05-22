import { useOption, useOptionDispatch } from "../../../optionsContext";
import { CardOptions } from "../../../../types";
import { TextField, Autocomplete } from "@mui/material";
import { Option } from "../../../../types";

type Props = {
  cardOptions: CardOptions;
};

export const DescriptionSection = (props: Props) => {
  const { cardOptions } = props;
  const optionDispatch = useOptionDispatch();
  const devToolOptionState = useOption()?.devToolOptionState;
  const incorrectState = useOption()?.incorrectGuessState;
  return (
    <>
      <div>
        <Autocomplete
          disablePortal
          id="card-description"
          options={cardOptions.bodyText}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Description"
              error={
                incorrectState["bodyText"] && devToolOptionState.showIncorrect
              }
            />
          )}
          onChange={(event: any, newValue: Option | null) =>
            optionDispatch!({
              type: "guess",
              action: { bodyText: newValue ? newValue.value : "" },
            })
          }
        />
      </div>
    </>
  );
};
