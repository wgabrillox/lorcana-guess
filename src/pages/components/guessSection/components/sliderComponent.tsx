import { Option, CardOptions } from "../../../../types";
import { IMAGES } from "../../../../constants";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Box from "@mui/material/Box";
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
      <label
        className={`font-bold mr-5 leading-7 ${disabled && "text-zinc-600/50"}`}
      >
        {label}:
      </label>
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
