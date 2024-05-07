import { SelectedOptions } from "../../../types";
import { InkGuessSection } from "./components/inkSection/inkGuessSection";

type Props = {
  selectedOptions: SelectedOptions;
  setSelectedOptions: ({
    keyName,
  }: {
    [keyName: string]: boolean | number;
  }) => void;
  checkAnswers: () => void;
  correctCount: number | undefined;
};

export const GuessSection = (props: Props) => {
  const { selectedOptions, setSelectedOptions, checkAnswers, correctCount } =
    props;

  const costOptions = Array(10)
    .fill(0)
    .map((_, i) => {
      const val = i + 1;
      return { value: val, label: val.toString() };
    });

  return (
    <div className="py-8 relative">
      <InkGuessSection
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <div className="absolute bottom-0">
        {correctCount !== undefined && (
          <div className="font-bold p-2">Correct Count: {correctCount}</div>
        )}
        <div
          className="mx-2 px-2 border text-center rounded bg-blue-500 hover:bg-blue-700 text-white cursor-pointer"
          onClick={() => checkAnswers()}
        >
          Submit
        </div>
      </div>
    </div>
  );
};
