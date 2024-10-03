import { IMAGES } from "../../../../../constants";
import { useOption } from "../../../../optionsContext";
import "./inkSection.css";

type Props = {
  isLocation: boolean;
  isInkable: boolean;
};

export const InkSection = (props: Props) => {
  const { isLocation } = props;
  const { inkable, cost } = useOption()?.guessOptionState;
  const attributes = useOption()?.attributeOptionState;

  return (
    <div
      className={`absolute inkWrapper ${
        isLocation ? "locationInk" : "baseCardInk"
      }`}
    >
      <div className="relative">
        <div
          className={`${
            !attributes.cost && "invisible"
          } cardCost text-white font-bold ${
            isLocation ? "text-sm locationCost" : "baseCost"
          } sm:text-2xl `}
        >
          {cost}
        </div>
        <img
          src={IMAGES.costEmpty}
          alt="base cost empty"
          className={`absolute ${
            isLocation ? "baseLocationCostEmpty" : "baseCostEmpty"
          }
          ${attributes.cost ? "" : "hidden"}
          `}
        />
        <div className={`${!attributes.inkable && "invisible"}`}>
          <img
            src={attributes.cost ? IMAGES.baseInkEmpty : IMAGES.baseInkCost}
            alt="base ink"
            className={`absolute ${
              isLocation ? "baseLocationEmpty" : "baseInkEmpty"
            }`}
          />
          {inkable ? (
            <img
              src={attributes.cost ? IMAGES.baseInkable : IMAGES.inkableEmpty}
              alt="emtpy ink"
              className={`absolute ${
                isLocation ? "locationInkEmpty" : "inkEmpty"
              }`}
            />
          ) : (
            <img
              src={
                attributes.cost ? IMAGES.baseNonInkable : IMAGES.nonInkableEmpty
              }
              alt="emtpy unink"
              className={`absolute ${
                isLocation ? "locationNoninkEmpty" : "noninkEmpty"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};
