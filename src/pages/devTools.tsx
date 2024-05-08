import { mockData } from "../constants";
import { useOption, useOptionDispatch } from "./optionsContext";

type Props = {
  setSelectedCard: (num: number) => void;
};

export const DevTools = (props: Props) => {
  const { setSelectedCard } = props;
  const ahh = useOption();
  const optionState = useOption()?.devToolOptionState;
  const optionDispatch = useOptionDispatch();

  const cardLabels = [
    "Item: Uninkable",
    "Item: Inkable",
    "Character: Uninkable",
    "Character: Inkable",
    "Location: Uninkable",
    "Location: Inkable",
  ];

  return (
    <div className="p-2">
      <div>
        <h3 className="font-bold">Dev tools:</h3>
        <div className="flex pt-2">
          <div className="font-bold pr-2">Show Placeholders:</div>
          <input
            type="checkbox"
            checked={optionState?.showEmptyPlaceholders}
            onChange={() =>
              optionDispatch!({
                type: "devTool",
                action: {
                  showEmptyPlaceholders: !optionState?.showEmptyPlaceholders,
                },
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
                  checked={optionState?.cardNumber === idx}
                  onChange={() => {
                    console.log("ahh", ahh);
                    setSelectedCard(idx);
                    optionDispatch!({
                      type: "devTool",
                      action: { cardNumber: idx },
                    });
                  }}
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
