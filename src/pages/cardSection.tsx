import { SelectedOptions } from "../types";
import "./cardSection.css";

import noninkable from "../images/noninkable-base-empty.png";
import inkableEmpty from "../images/inkable-base-empty.png";
type Props = {
  image: string;
  selectedOptions: SelectedOptions;
};

export const CardSection = (props: Props) => {
  const { image, selectedOptions } = props;
  const { inkable } = selectedOptions;
  return (
    <div className="w-1/3 border border-black">
      <div className="w-96 h-1/2 border-black mx-auto py-8">
        <div className="relative">
          {inkable ? (
            <div className="inkEmpty">
              <img src={inkableEmpty} alt="emtpy ink" />
            </div>
          ) : (
            <div className="noninkEmpty">
              <img src={noninkable} alt="emtpy ink" />
            </div>
          )}
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
