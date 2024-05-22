import { Option, CardOptions } from "../../../../types";
import { IMAGES } from "../../../../constants";
import { Box, FormLabel } from "@mui/material";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { useOption, useOptionDispatch } from "../../../optionsContext";

type Props = {
  label: string;
  max?: number;
  disabled?: boolean;
};

interface ThumbComponentProps extends React.HTMLAttributes<unknown> {}

export const SliderComponent = (props: Props) => {
  const { label, max, disabled } = props;
  const optionState = useOption()?.guessOptionState;
  const devToolState = useOption()?.devToolOptionState;
  const incorrectState = useOption()?.incorrectGuessState;
  const optionDispatch = useOptionDispatch();

  const handleChange = (event: Event, newValue: number | number[]) => {
    optionDispatch!({
      type: "guess",
      action: { [label.toLowerCase()]: newValue as number },
    });
  };

  function ThumbComponent(props: ThumbComponentProps) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="font-bold text-lorcana-gold">
          {optionState[label.toLowerCase()]}
        </span>
      </SliderThumb>
    );
  }

  return (
    <Box sx={{ width: 200 }} className="flex my-1">
      <FormLabel
        disabled={disabled}
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          mr: "20px",
          mt: "4px",
        }}
        error={
          incorrectState[label.toLowerCase()] && devToolState.showIncorrect
        }
      >
        {label}:
      </FormLabel>
      <Slider
        min={1}
        max={max ? max : 10}
        defaultValue={1}
        marks
        onChange={handleChange}
        slots={{ thumb: ThumbComponent }}
        sx={{
          "& .MuiSlider-thumb": {
            height: 27,
            width: 27,
            backgroundColor: `${disabled ? "#696969" : "#000"}`,
            border: "2px solid #b39961",
            "&:hover": {
              boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
            },
          },
          "& .MuiSlider-rail": {
            color: "#000",
          },
        }}
        disabled={disabled}
      />
    </Box>
  );
};
