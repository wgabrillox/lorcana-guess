import { IMAGES } from "../../../../../constants";
import { useOption } from "../../../../optionsContext";
import "./charStatSection.css";

type Props = {
  isLocation: boolean;
};

export const CharStatSection = (props: Props) => {
  const { isLocation } = props;
  const { type } = useOption()?.guessOptionState;

  return (
    <div>
      <div className="cardBanner">
        <img src={IMAGES.steelBanner} alt="base banner" />
      </div>
      {type === "Character" && (
        <div className="charStats">
          <img src={IMAGES.steelCharStats} alt="char stats" />
        </div>
      )}
    </div>
  );
};
