import Select from "react-select";
import { useOption, useOptionDispatch } from "../../../../optionsContext";
import { Option } from "../../../../../types";

type Props = {
  typeOptions: Option[];
};

export const CharStatGuessSection = (props: Props) => {
  const { typeOptions } = props;
  // console.log("typeOptions", typeOptions);
  const optionDispatch = useOptionDispatch();

  return (
    <>
      <div>
        <legend className="p-2 font-bold">Card Type:</legend>
        <Select
          options={typeOptions}
          className="px-2"
          onChange={(option) =>
            optionDispatch!({ type: "guess", action: { type: option!.value } })
          }
        />
      </div>
    </>
  );
};
