import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { MenuItem, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";

const TaskDetails = ({ handleClose, open, task }) => {
  const [inputStatus, setInputStatus] = useState(false);
  const { updateTaskStatus } = useStoreActions((state) => state);
  const handleChange = (e) => {
    const newStatus = {
      taskId: task.id,
      status: e.target.value,
    };
    updateTaskStatus(newStatus);
    setInputStatus(!inputStatus);
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            alignItems: "center",
          }}
        >
          <span>{task.name}</span>
          {inputStatus ? (
            <TextField
              select
              onChange={handleChange}
              variant="filled"
              sx={{ width: "100px" }}
              label={"Status"}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Progress">Progress</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
            </TextField>
          ) : (
            <>
              <span>{task.status}</span>
              <DriveFileRenameOutlineIcon
                onClick={() => setInputStatus(!inputStatus)}
              />
            </>
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {task.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskDetails;
