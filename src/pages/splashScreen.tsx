import { Set, Filter, FilterOptions } from "../types";
import "./main.css";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { colorIconBackgroundColor, IMAGES } from "../constants";
import Alert from "@mui/material/Alert";
import { DisclaimerDialog } from "./dialog";

type Props = {
  sets: Set[] | null;
  updateFilter: (options: Filter) => void;
  selectedFilters: FilterOptions;
  selectAllFilters: (toggle: boolean) => void;
  setShowGame: () => void;
  showError: boolean;
};

export const SplashScreen = (props: Props) => {
  const {
    sets,
    updateFilter,
    selectedFilters,
    selectAllFilters,
    setShowGame,
    showError,
  } = props;
  const types = ["Action", "Song", "Character", "Item", "Location"];

  return (
    <>
      <div className="w-full h-screen border content-center justify-center">
        <div className="lg:w-9/12 border mx-auto ">
          <div className="flex font-bold text-2xl md:text-4xl justify-center">
            Disney Lorcana: Guess the Card
          </div>
          <div className="w-fit mx-auto">
            {sets !== null && (
              <FormGroup>
                <div className="flex flex-col md:flex-row">
                  <div className="font-bold text-xl mx-auto md:mr-2 content-center border-b-2 border-slate-500 md:border-0">
                    Sets:
                  </div>
                  <div className="text-center md:flex">
                    {sets.map((set) => (
                      <FormControlLabel
                        key={set.name}
                        control={
                          <Checkbox
                            onChange={({ target }) =>
                              updateFilter({
                                category: "sets",
                                filter: set.setId.toLowerCase(),
                                value: target.checked,
                              })
                            }
                            checked={
                              selectedFilters.sets[set.setId.toLowerCase()]
                            }
                          />
                        }
                        label={set.name}
                      />
                    ))}
                  </div>
                </div>
              </FormGroup>
            )}
            <FormGroup>
              <div className="flex flex-col md:flex-row justify-left">
                <div className="font-bold text-xl mx-auto md:mr-2 md:mx-0 content-center border-b-2 border-slate-500 md:border-0">
                  Color:
                </div>
                <div className="mx-auto md:mx-0">
                  {Object.keys(colorIconBackgroundColor).map((color) => (
                    <FormControlLabel
                      key={color}
                      control={
                        <Checkbox
                          checked={selectedFilters.colors[color.toLowerCase()]}
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
                            updateFilter({
                              category: "colors",
                              filter: color.toLowerCase(),
                              value: target.checked,
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
            </FormGroup>
            <FormGroup>
              <div className="flex flex-col md:flex-row">
                <div className="font-bold text-xl mx-auto md:mx-0 md:mr-2 content-center border-b-2 border-slate-500 md:border-0">
                  Type:
                </div>
                <div className="inline-block justify-center text-center md:justify-left">
                  {types.map((type) => (
                    <FormControlLabel
                      key={type}
                      control={
                        <Checkbox
                          checked={selectedFilters.type[type.toLowerCase()]}
                          onChange={({ target }) =>
                            updateFilter({
                              category: "type",
                              filter: type.toLowerCase(),
                              value: target.checked,
                            })
                          }
                        />
                      }
                      label={type}
                    />
                  ))}
                </div>
              </div>
            </FormGroup>

            <div className="flex font-bold text-4xl justify-center">
              <div className="mr-2">
                <Button
                  variant="outlined"
                  onClick={() => selectAllFilters(true)}
                >
                  Select All
                </Button>
              </div>
              <div>
                <Button
                  variant="outlined"
                  onClick={() => selectAllFilters(false)}
                >
                  Unselect All
                </Button>
              </div>
            </div>

            <div className="mx-auto w-fit mt-2 flex">
              <Button variant="outlined" onClick={() => setShowGame()}>
                Begin!
              </Button>
            </div>
          </div>
          {showError && (
            <Alert severity="error" className="mt-2">
              No cards found, select more filters
            </Alert>
          )}
        </div>
      </div>
      <div className="absolute bottom-0">
        <DisclaimerDialog />
      </div>
    </>
  );
};
