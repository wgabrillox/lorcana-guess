import { colorIconBackgroundColor, IMAGES } from "../../../constants";
import Checkbox from "@mui/material/Checkbox";
import { Set } from "../../../types";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useOption, useOptionDispatch } from "../../optionsContext";

type Props = {
  sets: Set[] | null;
};

export const CardSelect = (props: Props) => {
  const { sets } = props;
  const types = ["Action", "Song", "Character", "Item", "Location"];

  const filterState = useOption()?.filterOptionState;
  const optionDispatch = useOptionDispatch();

  return (
    <div className="w-fit mx-auto pb-2">
      <Accordion defaultExpanded>
        <AccordionSummary
          className="font-bold text-xl pl-0"
          expandIcon={<div className="rotate-180">^</div>}
        >
          Card Filters:
        </AccordionSummary>
        <AccordionDetails>
          {sets !== null && (
            <div className="flex flex-col md:flex-row justify-left my-2">
              <div className="font-bold text-xl mx-auto md:mr-1 md:mx-0 content-center border-b-2 border-slate-500 md:border-0 mb-2">
                Sets:
              </div>
              <div className="text-center flex-none md:flex">
                {sets.map((set) => (
                  <div
                    className="mr-1 mb-1 md:mb-0 inline-block"
                    key={set.name}
                  >
                    <Chip
                      label={set.name}
                      variant={
                        filterState.sets[set.setId.toLowerCase()]
                          ? "outlined"
                          : "filled"
                      }
                      onClick={() =>
                        optionDispatch!({
                          type: "filter",
                          action: {
                            category: "sets",
                            filter: set.setId.toLowerCase(),
                            value: !filterState.sets[set.setId.toLowerCase()],
                          },
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col md:flex-row justify-left md:my-2">
            <div className="font-bold text-xl mx-auto md:mr-3 md:mx-0 content-center border-b-2 border-slate-500 md:border-0 mb-2">
              Colors:
            </div>
            <div className="mx-auto md:mx-0">
              {Object.keys(colorIconBackgroundColor).map((color) => (
                <FormControlLabel
                  sx={{
                    margin: "0px",
                  }}
                  key={color}
                  control={
                    <Checkbox
                      id={color}
                      checked={filterState.colors[color.toLowerCase()]}
                      icon={
                        <img
                          src={IMAGES[color]}
                          alt={`${color} icon`}
                          className="w-7 h-8"
                        />
                      }
                      checkedIcon={
                        <img
                          src={IMAGES[color]}
                          alt={`${color} icon`}
                          className="w-7 h-8"
                        />
                      }
                      onChange={({ target }) =>
                        optionDispatch!({
                          type: "filter",
                          action: {
                            category: "colors",
                            filter: color.toLowerCase(),
                            value: target.checked,
                          },
                        })
                      }
                      sx={{
                        "&.Mui-checked": {
                          bgcolor:
                            colorIconBackgroundColor[color.toLowerCase()],
                        },
                      }}
                    />
                  }
                  label=""
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="font-bold text-xl mx-auto md:mr-1 md:mx-0 content-center border-b-2 border-slate-500 md:border-0 mb-2">
              Type:
            </div>
            <div className="inline-block justify-center text-center md:justify-left md:flex">
              {types.map((type) => (
                <div className="mr-1 inline-block" key={type}>
                  <Chip
                    label={type}
                    variant={
                      filterState.type[type.toLowerCase()]
                        ? "outlined"
                        : "filled"
                    }
                    className="ml-1"
                    onClick={() =>
                      optionDispatch!({
                        type: "filter",
                        action: {
                          category: "type",
                          filter: type.toLowerCase(),
                          value: !filterState.type[type.toLowerCase()],
                        },
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex font-bold text-4xl justify-center">
            <div className="mr-2">
              <Button
                variant="outlined"
                onClick={() =>
                  optionDispatch!({
                    type: "filterAll",
                    action: true,
                  })
                }
              >
                Select All
              </Button>
            </div>
            <div>
              <Button
                variant="outlined"
                onClick={() =>
                  optionDispatch!({
                    type: "filterAll",
                    action: false,
                  })
                }
              >
                Unselect All
              </Button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
