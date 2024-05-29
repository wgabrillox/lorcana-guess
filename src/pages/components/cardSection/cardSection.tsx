import { IMAGES } from "../../../constants";
import { InkSection } from "./components/inkSection/inkSection";
import { CharStatSection } from "./components/charStatSection/charStatSection";
import { DescriptionSection } from "./components/descriptionSection/descriptionSection";
import { useOption } from "../../optionsContext";
import "./cardSection.css";

type Props = {
  image: string;
  isLocation: boolean;
};

export const CardSection = (props: Props) => {
  const { image, isLocation } = props;
  const { showEmptyPlaceholders } = useOption().devToolOptionState;
  return (
    <div className={`relative mr-2 cardWrapper`}>
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
        <div className={`relative ${!showEmptyPlaceholders && "invisible"}`}>
          <InkSection isLocation={isLocation} />
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
