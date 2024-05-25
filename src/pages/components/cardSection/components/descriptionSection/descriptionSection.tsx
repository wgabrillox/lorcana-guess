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
    <>
      {/* // <div className="absolute"> */}
      {/* <div className="relative"> */}
      <img
        src={isLocation ? IMAGES.locationDescription : IMAGES.descriptionBase}
        alt="base description"
        className={`${isLocation ? "locationBase" : "descriptionBase"}`}
      />
      {/* <div className="absolute top-0 p-2 descriptionText">{bodyText}</div> */}
      {/* </div> */}
      {/* {type === "Character" && lore !== 0 && (
        <img className="lore" src={IMAGES[loreCount]} alt="lore" />
      )} */}
      {/* // </div> */}
    </>
  );
};
