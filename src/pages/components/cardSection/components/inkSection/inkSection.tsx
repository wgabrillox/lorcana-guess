import { IMAGES } from "../../../../../constants";
import { useOption } from "../../../../optionsContext";
import "./inkSection.css";

type Props = {
  isLocation: boolean;
};

export const InkSection = (props: Props) => {
  const { isLocation } = props;
  const { inkable, cost } = useOption()?.guessOptionState;

  const locationCheck = isLocation ? "locationBase" : "left-1.5";

  return (
    <>
      <div
        className={`cardCost text-white font-bold text-2xl ${
          isLocation ? "locationCost" : "baseCost"
        }`}
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
          className={`absolute ${isLocation ? "locationInkEmpty" : "inkEmpty"}`}
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
    </>
  );
};
