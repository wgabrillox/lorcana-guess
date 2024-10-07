import { Set } from "../../../types";
import "../../main.css";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { DisclaimerDialog } from "../../dialog";
import { CardSelect } from "./cardSelect";
import { AttributeSelect } from "./attributeSelect";
import { useOption } from "../../optionsContext";

type Props = {
  sets: Set[] | null;
  setShowGame: () => void;
};

export const SplashScreen = (props: Props) => {
  const { sets, setShowGame } = props;

  const { attributeOptionState, filterOptionState } = useOption();

  const selectedSets = Object.keys(filterOptionState.sets).filter(
    (set: string) => filterOptionState.sets[set]
  );
  const selectedColors = Object.keys(filterOptionState.colors).filter(
    (color: string) => filterOptionState.colors[color]
  );
  const selectedTypes = Object.keys(filterOptionState.type).filter(
    (type: string) => filterOptionState.type[type]
  );
  const selectedAttributes = Object.keys(attributeOptionState).filter(
    (att: string) => attributeOptionState[att]
  );

  const optionCheck =
    !selectedSets.length ||
    !selectedColors.length ||
    !selectedTypes.length ||
    !selectedAttributes.length;

  return (
    <>
      <div className="w-full h-screen content-center justify-center pb-2">
        <div className="lg:w-9/12 mx-auto ">
          <div className="flex flex-col font-bold md:text-4xl items-center">
            <div className="text-2xl">Disney Lorcana</div>
            <div className="text-xl">Guess the Card</div>
          </div>
          <CardSelect sets={sets} />
          <AttributeSelect />
          {optionCheck && (
            <Alert severity="error" className="mt-2">
              No cards found, select more filters
            </Alert>
          )}
        </div>
        <div className="mx-auto w-fit mt-2 flex">
          <Button
            variant="outlined"
            onClick={() => setShowGame()}
            disabled={optionCheck}
          >
            Begin!
          </Button>
        </div>
      </div>

      <div className="fixed bottom-0 z-2 bg-white">
        <DisclaimerDialog />
      </div>
    </>
  );
};
