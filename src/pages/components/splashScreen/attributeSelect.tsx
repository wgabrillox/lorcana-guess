import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useOption, useOptionDispatch } from "../../optionsContext";
import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

type Props = {};

type AttributeProps = {
  attribute: string;
  label?: string;
};

export const AttributeSelect = (props: Props) => {
  const easyAttributes = ["name", "color", "type"];
  const normalAttributes = ["cost", "lore", "inkable"];
  const hardAttributes = [
    { attribute: "willpower" },
    { attribute: "strength" },
    { attribute: "moveCost", label: "Move Cost" },
    { attribute: "bodyText", label: "Body Text" },
  ];

  const attributeState = useOption()?.attributeOptionState;
  const optionDispatch = useOptionDispatch();

  const selectDifficultyLevel = (mode?: string) => {
    switch (mode) {
      case "easy":
        optionDispatch!({
          type: "attribute",
          action: {
            bodyText: false,
            color: true,
            cost: false,
            inkable: false,
            name: true,
            type: true,
            lore: false,
            strength: false,
            willpower: false,
            moveCost: false,
          },
        });
        break;
      case "normal":
        optionDispatch!({
          type: "attribute",
          action: {
            bodyText: false,
            color: true,
            cost: true,
            inkable: true,
            name: true,
            type: true,
            lore: true,
            strength: false,
            willpower: false,
            moveCost: false,
          },
        });
        break;
      case "hard":
        optionDispatch!({
          type: "attribute",
          action: {
            bodyText: true,
            color: true,
            cost: true,
            inkable: true,
            name: true,
            type: true,
            lore: true,
            strength: true,
            willpower: true,
            moveCost: true,
          },
        });
        break;
      default:
        optionDispatch!({
          type: "attribute",
          action: {
            bodyText: false,
            color: false,
            cost: false,
            inkable: false,
            name: false,
            type: false,
            lore: false,
            strength: false,
            willpower: false,
            moveCost: false,
          },
        });
    }
  };

  const AttributeComponent = (props: AttributeProps) => {
    const { attribute, label } = props;
    const baseLabel = `${attribute.charAt(0).toUpperCase()}${attribute.slice(
      1
    )}`;
    return (
      <FormControlLabel
        control={
          <Chip
            label={`${label ? label : baseLabel}`}
            variant={attributeState[attribute] ? "outlined" : "filled"}
            className="ml-1"
            onClick={() =>
              optionDispatch!({
                type: "attribute",
                action: {
                  [attribute]: !attributeState[attribute],
                },
              })
            }
          />
        }
        label=""
      />
    );
  };

  return (
    <div className="w-fit mx-auto">
      <Accordion defaultExpanded>
        <AccordionSummary
          className="font-bold text-xl pl-0"
          expandIcon={<div className="rotate-180">^</div>}
        >
          Attributes:
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col md:flex-row justify-left my-2">
            <div className="font-bold text-xl mx-auto md:mr-3 md:mx-0 content-center border-b-2 border-slate-500 md:border-0">
              Easy:
            </div>
            <div className="mx-auto md:mx-0">
              {easyAttributes.map((attribute) => (
                <AttributeComponent key={attribute} attribute={attribute} />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-left my-2">
            <div className="font-bold text-xl mx-auto md:mr-3 md:mx-0 content-center border-b-2 border-slate-500 md:border-0">
              Normal:
            </div>
            <div className="mx-auto md:mx-0">
              {normalAttributes.map((attribute) => (
                <AttributeComponent key={attribute} attribute={attribute} />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-left my-2">
            <div className="font-bold text-xl mx-auto md:mr-3 md:mx-0 content-center border-b-2 border-slate-500 md:border-0">
              Hard:
            </div>
            <div className="mx-auto md:mx-0">
              {hardAttributes.map((attribute) => (
                <AttributeComponent
                  key={attribute.attribute}
                  attribute={attribute.attribute}
                  label={attribute.label}
                />
              ))}
            </div>
          </div>
          <div className="flex font-bold text-4xl justify-center">
            <div className="mr-2">
              <Button
                variant="outlined"
                onClick={() => selectDifficultyLevel("easy")}
              >
                Easy
              </Button>
            </div>
            <div className="mr-2">
              <Button
                variant="outlined"
                onClick={() => selectDifficultyLevel("normal")}
              >
                Normal
              </Button>
            </div>
            <div>
              <Button
                variant="outlined"
                onClick={() => selectDifficultyLevel("hard")}
              >
                Hard
              </Button>
            </div>
          </div>
          <div className="flex font-bold text-4xl justify-center">
            <div>
              <Button
                variant="outlined"
                onClick={() => selectDifficultyLevel()}
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
