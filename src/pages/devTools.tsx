import { SelectedDevTools } from "../types";
import { mockData } from "../constants";
type Props = {
  selectedDevTools: SelectedDevTools;
  setSelectedDevTools: ({
    keyName,
  }: {
    [keyName: string]: boolean | number;
  }) => void;
};

export const DevTools = (props: Props) => {
  const { selectedDevTools, setSelectedDevTools } = props;
  const { showEmptyPlaceholders, selectedCardNumber } = selectedDevTools;

  const cardLabels = [
    "Item: Uninkable",
    "Item: Inkable",
    "Character: Uninkable",
    "Character: Inkable",
    "Location: Uninkable",
    "Location: Inkable",
  ];
  console.log("selectedDevTools", selectedDevTools);
  return (
    <div className="p-2">
      <div>
        <h3 className="font-bold">Dev tools:</h3>
        <div className="flex pt-2">
          <div className="font-bold pr-2">Show Placeholders:</div>
          <input
            type="checkbox"
            checked={showEmptyPlaceholders}
            onChange={() =>
              setSelectedDevTools({
                showEmptyPlaceholders: !showEmptyPlaceholders,
              })
            }
          />
        </div>
        <div>
          <div className="font-bold pt-2">Card select:</div>
          <fieldset className="flex">
            {mockData.map((item, idx) => (
              <div className="pr-2" key={idx}>
                <input
                  type="radio"
                  name="card"
                  checked={selectedCardNumber === idx}
                  onChange={() =>
                    setSelectedDevTools({ selectedCardNumber: idx })
                  }
                />
                <label className="px-1">{cardLabels[idx]}</label>
              </div>
            ))}
          </fieldset>
        </div>
      </div>
    </div>
  );
};
