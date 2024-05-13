import Select from "react-select";
import { useOption, useOptionDispatch } from "../../../../optionsContext";
import { CardOptions } from "../../../../../types";
import { Option } from "../../../../../types";

type Props = {
  cardOptions: CardOptions;
};

export const CharStatGuessSection = (props: Props) => {
  const { cardOptions } = props;

  // console.log("typeOptions", typeOptions);
  const optionState = useOption()?.guessOptionState;
  const optionDispatch = useOptionDispatch();
  console.log("optionState", optionState);

  return (
    <>
      <div>
        <div>
          <legend className="p-2 font-bold">Color:</legend>
          <Select
            options={cardOptions.color}
            className="px-2"
            onChange={(option) =>
              optionDispatch!({
                type: "guess",
                action: { color: option!.value },
              })
            }
          />
        </div>
        <div>
          <legend className="p-2 font-bold">Card Type:</legend>
          <Select
            options={cardOptions.cardType}
            className="px-2"
            onChange={(option) =>
              optionDispatch!({
                type: "guess",
                action: { type: option!.value },
              })
            }
          />
        </div>
        <div>
          <legend className="p-2 font-bold">Card Name:</legend>
          <Select
            options={cardOptions.name.sort((a, b) =>
              a.value > b.value ? 1 : -1
            )}
            className="px-2"
            onChange={(option) =>
              optionDispatch!({
                type: "guess",
                action: { name: option!.value },
              })
            }
          />
        </div>
        {optionState.type === "Character" && (
          <div>
            <div className="flex">
              <div>
                <legend className="p-2 font-bold">Strength:</legend>
                <Select
                  options={cardOptions.strength}
                  className="px-2"
                  onChange={(option) =>
                    optionDispatch!({
                      type: "guess",
                      action: { strength: option!.value },
                    })
                  }
                />
              </div>
              <div>
                <legend className="p-2 font-bold">Willpower:</legend>
                <Select
                  options={cardOptions.willpower}
                  className="px-2"
                  onChange={(option) =>
                    optionDispatch!({
                      type: "guess",
                      action: { willpower: option!.value },
                    })
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
