import Select from "react-select";
import { useOptionDispatch } from "../../../optionsContext";
import { CardOptions, Option } from "../../../../types";
import { TextField, Autocomplete } from "@mui/material";
type Props = {
  cardOptions: CardOptions;
};

export const RightColumn = (props: Props) => {
  const { cardOptions } = props;

  const optionDispatch = useOptionDispatch();

  return (
    <div className="flex-1">
      <Autocomplete
        disablePortal
        id="card-name"
        options={cardOptions.cardType}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Type" />}
        onChange={(event: any, newValue: Option | null) =>
          optionDispatch!({
            type: "guess",
            action: { type: newValue ? newValue.value : "" },
          })
        }
      />
      <div className="flex">
        <div>
          <legend className="font-bold">Strength:</legend>
          <Select
            options={cardOptions.strength}
            className=""
            onChange={(option) =>
              optionDispatch!({
                type: "guess",
                action: { strength: option!.value },
              })
            }
          />
        </div>
        <div>
          <legend className="font-bold">Willpower:</legend>
          <Select
            options={cardOptions.willpower}
            className=""
            onChange={(option) =>
              optionDispatch!({
                type: "guess",
                action: { willpower: option!.value },
              })
            }
          />
        </div>
      </div>
      <div>
        <legend className="font-bold">Lore:</legend>
        <Select
          options={cardOptions?.lore}
          className=""
          onChange={(option) =>
            optionDispatch!({
              type: "guess",
              action: { lore: option!.value },
            })
          }
        />
      </div>
    </div>
  );
};
