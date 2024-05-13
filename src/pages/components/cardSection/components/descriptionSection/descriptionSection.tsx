import { IMAGES } from "../../../../../constants";
import { useOption } from "../../../../optionsContext";
import "./descriptionSection.css";

type Props = {
  isLocation: boolean;
};

export const DescriptionSection = (props: Props) => {
  const { isLocation } = props;
  const { bodyText } = useOption()?.guessOptionState;

  return (
    <div>
      <div className="descriptionBase">
        <img src={IMAGES.descriptionBase} alt="base description" />
        <div className="absolute top-0 p-2">{bodyText}</div>
      </div>
    </div>
  );
};
