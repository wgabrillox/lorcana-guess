import Select from "react-select";
import { useOption, useOptionDispatch } from "../../../../optionsContext";

export const InkGuessSection = () => {
  const costOptions = Array(10)
    .fill(0)
    .map((_, i) => {
      const val = i + 1;
      return { value: val, label: val.toString() };
    });

  const optionState = useOption()?.guessOptionState;
  const optionDispatch = useOptionDispatch();

  console.log("ink guess section", optionState);

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
          options={costOptions}
          className="px-2"
          onChange={(option) =>
            optionDispatch!({ type: "guess", action: { cost: option!.value } })
          }
        />
      </div>
    </>
  );
};
