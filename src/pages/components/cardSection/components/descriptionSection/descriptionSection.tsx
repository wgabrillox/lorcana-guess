import { IMAGES } from "../../../../../constants";
import { useOption } from "../../../../optionsContext";
import "./descriptionSection.css";

type Props = {
  isLocation: boolean;
};

export const DescriptionSection = (props: Props) => {
  const { isLocation } = props;
  const { bodyText, type, lore } = useOption()?.guessOptionState;

  const loreCount = lore ? `lore${lore}` : "";
  return (
    <div className="relative">
      <div className="descriptionBase">
        <img src={IMAGES.descriptionBase} alt="base description" />
        <div className="absolute top-0 p-2 descriptionText">{bodyText}</div>
      </div>
      {type === "Character" && lore !== 0 && (
        <img className="lore" src={IMAGES[loreCount]} alt="lore" />
      )}
    </div>
  );
};
