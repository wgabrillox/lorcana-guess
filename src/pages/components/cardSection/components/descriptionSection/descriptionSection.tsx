import { IMAGES } from "../../../../../constants";
import { useOption } from "../../../../optionsContext";
import "./descriptionSection.css";

type Props = {
  isLocation: boolean;
};

export const DescriptionSection = (props: Props) => {
  const { isLocation } = props;
  const { bodyText, type, lore } = useOption()?.guessOptionState;

  const loreCount = lore
    ? isLocation
      ? `locationLore${lore}`
      : `lore${lore}`
    : "";

  const showLore = (type === "Character" || type === "Location") && lore >= 1;

  return (
    <div className="relative">
      <div
        className={`absolute ${
          isLocation ? "descriptionLocation" : "descriptionBase"
        }`}
      >
        <img
          src={isLocation ? IMAGES.locationDescription : IMAGES.descriptionBase}
          alt="base description"
        />
        <div
          className={`absolute top-0 text-xs md:text-base ${
            isLocation ? "locationText" : "descriptionText"
          }`}
        >
          {bodyText}
        </div>
      </div>
      {showLore && (
        <img
          className={`${!showLore && "hidden"} ${
            isLocation ? "locationLore" : "lore"
          }`}
          src={IMAGES[loreCount]}
          alt="lore"
        />
      )}
    </div>
  );
};
