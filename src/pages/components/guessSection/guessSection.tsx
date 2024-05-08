import { InkGuessSection } from "./components/inkSection/inkGuessSection";

type Props = {
  checkAnswers: () => void;
  correctCount: number | undefined;
};

export const GuessSection = (props: Props) => {
  const { checkAnswers, correctCount } = props;

  return (
    <div className="py-8 relative">
      <InkGuessSection />
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
