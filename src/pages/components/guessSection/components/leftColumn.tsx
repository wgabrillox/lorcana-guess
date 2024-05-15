// import Select from "react-select";
import { useOption, useOptionDispatch } from "../../../optionsContext";
import { Option, CardOptions } from "../../../../types";
import { TextField, Autocomplete } from "@mui/material";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import { IMAGES } from "../../../../constants";
import { pink, blue } from "@mui/material/colors";
import Slider from "@mui/material/Slider";

type Props = {
  cost: Option[];
  cardOptions: CardOptions;
};

export const LeftColumn = (props: Props) => {
  const { cost, cardOptions } = props;
  const optionState = useOption()?.guessOptionState;
  const optionDispatch = useOptionDispatch();
  console.log("cardOptions", cardOptions);
  const [selectedValue, setSelectedValue] = useState("a");

  const controlProps = (option: Option) => ({
    checked: optionState.color === option.value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      optionDispatch!({
        type: "guess",
        action: { color: event.target.value },
      }),
    value: option.value,
    name: "size-radio-button-demo",
    // inputProps: { "aria-label": option.value ? option.value.toString : "" },
  });

  const colorIconBackgroundColor: { [key: string]: string } = {
    amber: "rgba(244, 179, 1, 0.3);",
    amethyst: "rgba(128, 56, 123, 0.3);",
    ruby: "rgba(210, 11, 46, 0.3)",
    steel: "rgba(159, 169, 179, 0.3)",
    sapphire: "rgba(2, 137, 195, 0.3)",
    emerald: "rgba(41, 138, 52, 0.3)",
  };

  return (
    <div className="flex-column mr-4">
      <div>
        <span className="font-bold">Inkable</span>
        <Switch
          defaultChecked
          onChange={(event: any, newValue: boolean) =>
            optionDispatch!({ type: "guess", action: { inkable: newValue } })
          }
        />
      </div>
      <div>
        <label className="font-bold">Cost</label>
        <Slider
          defaultValue={30}
          sx={{
            width: 300,
            color: "success.main",
            "& .MuiSlider-thumb": {
              color: pink,
              // backgroundImage: url(IMAGES.nonInkableEmpty);
              // background-image: url(IMAGES.nonInkableEmpty);
            },
          }}
        />
      </div>
      {/* <div>
        <legend className="font-bold">Card Cost:</legend>
        <Select
          options={cost}
          className=""
          onChange={(option) =>
            optionDispatch!({ type: "guess", action: { cost: option!.value } })
          }
        />
      </div>
      <div>
        <legend className="font-bold">Color:</legend>
        <Select
          options={cardOptions.color}
          className=""
          onChange={(option) =>
            optionDispatch!({
              type: "guess",
              action: { color: option!.value },
            })
          }
        />
      </div> */}
      <div>
        {/* <Radio {...controlProps("a")} size="small" /> */}
        <label className="font-bold">Color:</label>
        {cardOptions.color.map((color) => (
          <Radio
            {...controlProps(color)}
            key={color.value}
            checkedIcon={
              <img
                src={IMAGES[color.label.toLowerCase()]}
                alt={`${color.label} icon`}
              />
            }
            icon={
              <img
                src={IMAGES[color.label.toLowerCase()]}
                alt={`${color.label} icon`}
              />
            }
            sx={{
              width: 45,
              height: 45,
              padding: 1,
              "&.Mui-checked": {
                // color: blue[800],
                bgcolor: colorIconBackgroundColor[color.label.toLowerCase()],
              },
            }}
          />
        ))}
        {/* <Radio
          {...controlProps("b")}
          // icon={<img src={IMAGES.nonInkableEmpty} alt="emtpy unink" />}
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: blue[800],
              // bgcolor: rgba(0, 0, 255, 0.2),
            },
          }}
        />
        <Radio
          {...controlProps("c")}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 28,
            },
          }}
        /> */}
      </div>
      <Autocomplete
        disablePortal
        id="card-name"
        options={cardOptions.name}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Card Name" />}
        onChange={(event: any, newValue: Option | null) =>
          optionDispatch!({
            type: "guess",
            action: { name: newValue ? newValue.value : "" },
          })
        }
      />
    </div>
  );
};
