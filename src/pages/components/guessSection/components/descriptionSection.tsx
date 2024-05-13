import Select from "react-select";
import { useOption, useOptionDispatch } from "../../../optionsContext";
import { Option } from "../../../../types";
import { CardOptions } from "../../../../types";

type Props = {
  cardOptions: CardOptions;
};

export const DescriptionSection = (props: Props) => {
  const { cardOptions } = props;
  const optionState = useOption()?.guessOptionState;
  const optionDispatch = useOptionDispatch();

  console.log("optionStateeeeee", optionState);

  return (
    <>
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
