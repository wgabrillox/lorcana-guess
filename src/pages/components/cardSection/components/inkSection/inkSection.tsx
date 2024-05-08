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
    <div>
      <div
        className={`cardCost text-white font-bold text-lg ${
          isLocation && "-rotate-90"
        }`}
      >
        {cost}
      </div>
      <div className="baseInkEmpty">
        <img src={IMAGES.baseInkEmpty} alt="base ink" />
      </div>
      <div>
        {inkable ? (
          <div className="inkEmpty">
            <img src={IMAGES.inkableEmpty} alt="emtpy ink" />
          </div>
        ) : (
          <div className="noninkEmpty">
            <img src={IMAGES.nonInkableEmpty} alt="emtpy unink" />
          </div>
        )}
      </div>
    </div>
  );
};
