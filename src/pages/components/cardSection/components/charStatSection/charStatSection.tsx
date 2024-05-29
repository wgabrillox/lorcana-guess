import { IMAGES } from "../../../../../constants";
import { useOption } from "../../../../optionsContext";
import "./charStatSection.css";

type Props = {
  isLocation: boolean;
};

export const CharStatSection = (props: Props) => {
  const { isLocation } = props;
  const { type, strength, willpower, color, name, moveCost } =
    useOption()?.guessOptionState;
  let colorBanner,
    colorCharStats = "";

  switch (color) {
    case "Steel":
      colorBanner = isLocation ? IMAGES.steelLocation : IMAGES.steelBanner;
      colorCharStats = IMAGES.steelCharStats;
      break;
    case "Amethyst":
      colorBanner = isLocation
        ? IMAGES.amethystLocation
        : IMAGES.amethystBanner;
      colorCharStats = IMAGES.amethystCharStats;
      break;
    case "Amber":
      colorBanner = isLocation ? IMAGES.amberLocation : IMAGES.amberBanner;
      colorCharStats = IMAGES.amberCharStats;
      break;
    case "Sapphire":
      colorBanner = isLocation
        ? IMAGES.sapphireLocation
        : IMAGES.sapphireBanner;
      colorCharStats = IMAGES.sapphireCharStats;
      break;
    case "Emerald":
      colorBanner = isLocation ? IMAGES.emeraldLocation : IMAGES.emeraldBanner;
      colorCharStats = IMAGES.emeraldCharStats;
      break;
    case "Ruby":
      colorBanner = isLocation ? IMAGES.rubyLocation : IMAGES.rubyBanner;
      colorCharStats = IMAGES.rubyCharStats;
      break;
    default:
      break;
  }

  const splitName = name.split(" - ");
  return (
    <div>
      {colorBanner && (
        <div
          className={`absolute ${
            isLocation ? "cardLocationBanner" : "cardBanner"
          }`}
        >
          <img src={colorBanner} alt="base banner" />
          <div className="name">
            <div
              className={` font-bold text-white ${
                isLocation ? "locationName" : "nameWrapper"
              }`}
            >
              <div
                className={`${
                  type === "Character"
                    ? "ml-5 mt-1"
                    : `text-center ${splitName.length === 2 ? "mt-2" : "mt-4"}`
                }`}
              >
                <div className="font-bold text-xl">
                  {splitName[0].toUpperCase()}
                </div>
                <div className="subName font-bold text-xs">{splitName[1]}</div>
              </div>
            </div>
          </div>
          <div className="cardType">
            <div
              className={`${
                isLocation ? "locationTypeLabel" : "cardTypeLabel"
              }`}
            >
              <div className="mx-auto my-0 text-center">{type}</div>
            </div>
          </div>
        </div>
      )}
      {type === "Character" && (
        <>
          <div className="absolute charStats">
            <img src={colorCharStats} alt="char stats" />
          </div>
          <div className="strength font-bold text-2xl ">{strength}</div>
          <div className="willpower text-white font-bold text-2xl ">
            {willpower}
          </div>
        </>
      )}
      {type === "Location" && (
        <div className="locationStats">
          <div className="locationMovecost text-white font-bold text-2xl ">
            {moveCost}
          </div>
          <div className="locationWillpower text-white font-bold text-2xl ">
            {willpower}
          </div>
        </div>
      )}
    </div>
  );
};
