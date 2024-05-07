import { SelectedOptions } from "../../../../../types";
import { IMAGES } from "../../../../../constants";
import "./inkSection.css";

type Props = {
  selectedOptions: SelectedOptions;
  isLocation: boolean;
};

export const InkSection = (props: Props) => {
  const { selectedOptions, isLocation } = props;
  const { inkable, cost } = selectedOptions;

  return (
    <div>
      <div
        className={`cardCost text-white font-bold ${
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
