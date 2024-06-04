import * as React from "react";
import {
  Slider as BaseSlider,
  SliderThumbSlotProps,
  SliderProps,
} from "@mui/base/Slider";

const Thumb = React.forwardRef(function Thumb(
  props: SliderThumbSlotProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  const { ownerState, className = "", children, ...other } = props;
  return (
    <span
      className={`${className} ring-yellow-500 ring-2 bg-white justify-center rounded-full flex w-5 h-5 -mt-1 -ml-2 items-center shadow absolute`}
      {...other}
      ref={ref}
    >
      <span
        className={`w-5 h-5 bg-black ${
          ownerState.disabled ? "text-gray-500" : "text-white"
        } rounded-full ring-1 ring-inset ring-slate-900/5 text-center text-sm`}
      >
        {ownerState.value}
      </span>
      {children}
    </span>
  );
});

const Slider = React.forwardRef(function Slider(
  props: SliderProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  return (
    <BaseSlider
      {...props}
      className={"mt-1.5"}
      ref={ref}
      slots={{
        thumb: Thumb,
      }}
      slotProps={{
        root: { className: "w-full relative inline-block h-2 cursor-pointer" },
        rail: {
          className:
            "bg-slate-100 dark:bg-slate-700 h-2 w-full rounded-full block absolute",
        },
        track: {
          className: "bg-black h-2 absolute rounded-full",
        },
        mark: {
          className: "bg-slate-500 w-0.5 h-2 absolute",
        },
      }}
    />
  );
});

export default Slider;
