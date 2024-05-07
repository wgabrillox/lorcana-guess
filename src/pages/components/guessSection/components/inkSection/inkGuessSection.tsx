import { Card, SelectedOptions } from "../../../../../types";
import Select from "react-select";

type Props = {
  selectedOptions: SelectedOptions;
  setSelectedOptions: ({
    keyName,
  }: {
    [keyName: string]: boolean | number;
  }) => void;
};

export const InkGuessSection = (props: Props) => {
  const { selectedOptions, setSelectedOptions } = props;

  const costOptions = Array(10)
    .fill(0)
    .map((_, i) => {
      const val = i + 1;
      return { value: val, label: val.toString() };
    });

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
            checked={selectedOptions.inkable}
            onChange={() => setSelectedOptions({ inkable: true })}
          />
          <label className="px-1">Inkable</label>
        </div>
        <div>
          <input
            type="radio"
            id="noninkable"
            name="inkstatus"
            value="noninkable"
            checked={!selectedOptions.inkable}
            onChange={() => setSelectedOptions({ inkable: false })}
          />
          <label className="px-1">Non-Inkable</label>
        </div>
      </fieldset>
      <div>
        <legend className="p-2 font-bold">Card Cost:</legend>
        <Select
          options={costOptions}
          className="px-2"
          onChange={(option) => setSelectedOptions({ cost: option!.value })}
        />
      </div>
    </>
  );
};
