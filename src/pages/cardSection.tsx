import { SelectedOptions, SelectedDevTools } from "../types";
import "./cardSection.css";

import noninkable from "../images/noninkable-base-empty.png";
import inkableEmpty from "../images/inkable-base-empty.png";
import baseInkEmpty from "../images/base-ink-empty.png";
type Props = {
  image: string;
  isLocation: boolean;
  selectedDevTools: SelectedDevTools;
  selectedOptions: SelectedOptions;
};

export const CardSection = (props: Props) => {
  const { image, isLocation, selectedDevTools, selectedOptions } = props;
  const { inkable } = selectedOptions;
  const { showEmptyPlaceholders } = selectedDevTools;
  return (
    <div className="w-1/3">
      <div className="w-96 h-1/2 mx-auto py-8">
        <div className={`relative ${isLocation && "locationCard"}`}>
          {showEmptyPlaceholders && (
            <div>
              <div className="baseInkEmpty">
                <img src={baseInkEmpty} alt="base ink" />
              </div>
              <div>
                {inkable ? (
                  <div className="inkEmpty">
                    <img src={inkableEmpty} alt="emtpy ink" />
                  </div>
                ) : (
                  <div className="noninkEmpty">
                    <img src={noninkable} alt="emtpy unink" />
                  </div>
                )}
              </div>
            </div>
          )}
          <img src={image} alt="card" />
        </div>
      </div>
    </div>
  );
};
