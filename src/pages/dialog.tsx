import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
export const DisclaimerDialog = () => {
  const [toggleDialog, setToggleDialog] = useState(false);

  return (
    <>
      <div
        onClick={() => setToggleDialog(true)}
        className="flex m-2 text-slate-400 cursor-pointer"
      >
        Disclaimer
        <div className="border border-slate-400 rounded-lg w-4 h-4 font-bold text-xs text-center ml-1 mt-1">
          i
        </div>
      </div>
      <Dialog open={toggleDialog} onClose={() => setToggleDialog(false)}>
        <DialogTitle>Disclaimer:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This site uses copyright owned by Disney Lorcana TCG/Ravensburger.
            It is not affiliated or approved specifically by Disney or
            Ravevensburger.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
