import { IMAGES } from "../../../constants";
import { InkSection } from "./components/inkSection/inkSection";
import { CharStatSection } from "./components/charStatSection/charStatSection";
import { DescriptionSection } from "./components/descriptionSection/descriptionSection";
import { useOption } from "../../optionsContext";
import { Card } from "../../../types";
import "./cardSection.css";

type Props = {
  selectedCard: Card | undefined;
};

export const CardSection = (props: Props) => {
  const { selectedCard } = props;

  const image = selectedCard!?.image;
  const isLocation = selectedCard!.type === "Location";
  const inkable = selectedCard!.inkable;

  const { showEmptyPlaceholders } = useOption().globalOptionState;
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
          <InkSection isLocation={isLocation} isInkable={inkable} />
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
