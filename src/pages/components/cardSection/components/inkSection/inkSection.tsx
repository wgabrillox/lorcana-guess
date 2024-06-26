import { IMAGES } from "../../../../../constants";
import { useOption } from "../../../../optionsContext";
import "./inkSection.css";

type Props = {
  isLocation: boolean;
};

export const InkSection = (props: Props) => {
  const { isLocation } = props;
  const { inkable, cost } = useOption()?.guessOptionState;

  return (
    <div
      className={`absolute inkWrapper ${
        isLocation ? "locationInk" : "baseCardInk"
      }`}
    >
      <div className="relative">
        <div
          className={`cardCost text-white font-bold ${
            isLocation ? "text-sm locationCost" : "baseCost"
          } sm:text-2xl `}
        >
          {cost}
        </div>
        <img
          src={IMAGES.baseInkEmpty}
          alt="base ink"
          className={`absolute ${
            isLocation ? "baseLocationEmpty" : "baseInkEmpty"
          }`}
        />
        {inkable ? (
          <img
            src={IMAGES.inkableEmpty}
            alt="emtpy ink"
            className={`absolute ${
              isLocation ? "locationInkEmpty" : "inkEmpty"
            }`}
          />
        ) : (
          <img
            src={IMAGES.nonInkableEmpty}
            alt="emtpy unink"
            className={`absolute ${
              isLocation ? "locationNoninkEmpty" : "noninkEmpty"
            }`}
          />
        )}
      </div>
    </div>
  );
};
