import { IMAGES } from "../../../constants";
import { InkSection } from "./components/inkSection/inkSection";
import { CharStatSection } from "./components/charStatSection/charStatSection";
import { DescriptionSection } from "./components/descriptionSection/descriptionSection";
import { useOption, useOptionDispatch } from "../../optionsContext";
import { Option, Card, CardOptions } from "../../../types";

import "./cardSection.css";

type Props = {
  image: string;
  isLocation: boolean;
};

export const CardSection = (props: Props) => {
  const { image, isLocation } = props;
  const { showEmptyPlaceholders } = useOption().globalOptionState;

  const attributeState = useOption()?.attributeOptionState;

  return (
    <div className={`relative lg:mr-2 cardWrapper mx-auto`}>
      <img
        src={image}
        alt="card"
        className={`card ${isLocation && "rotate-90"}`}
      />
      <div
        className={`absolute top-0 ${
          isLocation ? "locationBase" : "basicBase"
        }`}
      >
        <div
          className={`relative ${!showEmptyPlaceholders && "invisible"} ${
            isLocation ? "outlineLocationCard" : "outlineCard"
          }`}
        >
          <InkSection isLocation={isLocation} attributes={attributeState} />
          <CharStatSection isLocation={isLocation} />
          <DescriptionSection isLocation={isLocation} />
          <img
            src={isLocation ? IMAGES.baseLocation : IMAGES.baseCard}
            alt="base card"
          />
        </div>
      </div>
    </div>
  );
};
