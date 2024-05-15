import Select from "react-select";
import { useOption, useOptionDispatch } from "../../../optionsContext";
import { CardOptions } from "../../../../types";

type Props = {
  cardOptions: CardOptions;
};

export const DescriptionSection = (props: Props) => {
  const { cardOptions } = props;
  const { type } = useOption()?.guessOptionState;
  const optionDispatch = useOptionDispatch();

  return (
    <>
      {type === "Character" && (
        <div>
          <legend className="p-2 font-bold">Lore:</legend>
          <Select
            options={cardOptions?.lore}
            className="px-2"
            onChange={(option) =>
              optionDispatch!({
                type: "guess",
                action: { lore: option!.value },
              })
            }
          />
        </div>
      )}
      <div>
        <legend className="p-2 font-bold">Description:</legend>
        <Select
          options={cardOptions?.bodyText}
          className="px-2"
          onChange={(option) =>
            optionDispatch!({
              type: "guess",
              action: { bodyText: option!.value },
            })
          }
        />
      </div>
    </>
  );
};
