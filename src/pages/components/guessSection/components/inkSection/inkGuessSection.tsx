import Select from "react-select";
import { useOption, useOptionDispatch } from "../../../../optionsContext";
import { Option } from "../../../../../types";
type Props = {
  cost: Option[];
};

export const InkGuessSection = (props: Props) => {
  const { cost } = props;
  const optionState = useOption()?.guessOptionState;
  const optionDispatch = useOptionDispatch();

  return (
    <>
      <fieldset className="flex">
        <legend className="px-2 font-bold">Inkable</legend>
        <div className="px-2">
          <input
            type="radio"
            id="inkable"
            name="inkstatus"
            value="inkable"
            checked={optionState?.inkable}
            onChange={() =>
              optionDispatch!({ type: "guess", action: { inkable: true } })
            }
          />
          <label className="px-1">Inkable</label>
        </div>
        <div>
          <input
            type="radio"
            id="noninkable"
            name="inkstatus"
            value="noninkable"
            checked={!optionState?.inkable}
            onChange={() =>
              optionDispatch!({ type: "guess", action: { inkable: false } })
            }
          />
          <label className="px-1">Non-Inkable</label>
        </div>
      </fieldset>
      <div>
        <legend className="p-2 font-bold">Card Cost:</legend>
        <Select
          options={cost}
          className="px-2"
          onChange={(option) =>
            optionDispatch!({ type: "guess", action: { cost: option!.value } })
          }
        />
      </div>
    </>
  );
};
