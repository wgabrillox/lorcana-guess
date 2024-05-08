import { IMAGES } from "../../../constants";
import { InkSection } from "./components/inkSection/inkSection";
import { useOption } from "../../optionsContext";

type Props = {
  image: string;
  isLocation: boolean;
};

export const CardSection = (props: Props) => {
  const { image, isLocation } = props;
  const { showEmptyPlaceholders } = useOption().devToolOptionState;
  return (
    <div className="w-1/3">
      <div className="w-96 h-1/2 mx-auto py-8">
        <div className={`relative ${isLocation && "rotate-90"}`}>
          {showEmptyPlaceholders && (
            <div>
              <div>
                <InkSection isLocation={isLocation} />
              </div>
              <img src={IMAGES.baseCard} alt="base card" className="absolute" />
            </div>
          )}

          <img src={image} alt="card" />
        </div>
      </div>
    </div>
  );
};
