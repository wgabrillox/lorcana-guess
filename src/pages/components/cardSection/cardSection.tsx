import { SelectedOptions, SelectedDevTools } from "../../../types";
import { IMAGES } from "../../../constants";
import { InkSection } from "./components/inkSection/inkSection";
import "./cardSection.css";

type Props = {
  image: string;
  isLocation: boolean;
  selectedDevTools: SelectedDevTools;
  selectedOptions: SelectedOptions;
};

export const CardSection = (props: Props) => {
  const { image, isLocation, selectedDevTools, selectedOptions } = props;
  const { inkable, cost } = selectedOptions;
  const { showEmptyPlaceholders } = selectedDevTools;

  return (
    <div className="w-1/3">
      <div className="w-96 h-1/2 mx-auto py-8">
        <div className={`relative ${isLocation && "rotate-90"}`}>
          {showEmptyPlaceholders && (
            <div>
              <InkSection
                selectedOptions={selectedOptions}
                isLocation={isLocation}
              />
            </div>
          )}
          <img src={IMAGES.baseCard} alt="base card" className="absolute" />
          <img src={image} alt="card" />
        </div>
      </div>
    </div>
  );
};
