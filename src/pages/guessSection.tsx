import { Card, SelectedOptions } from "../types";

type Props = {
  card: Card;
  selectedOptions: SelectedOptions;
  setSelectedOptions: ({ keyName }: { [keyName: string]: boolean }) => void;
};

export const GuessSection = (props: Props) => {
  const { card, selectedOptions, setSelectedOptions } = props;
  return (
    <div className="py-8">
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
    </div>
  );
};
