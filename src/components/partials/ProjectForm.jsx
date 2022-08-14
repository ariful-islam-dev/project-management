import { DialogContent, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";

const ProjectForm = ({
  open,
  handleClose,
  handleFormData,
  title = "Create New",
  init = {},
}) => {
  const [state, setState] = useState();

  useEffect(() => {
    Object.entries(init).map(([key, value]) => {
      setState((prev) => ({
        ...prev,
        [key]: value.value,
      }));
    });
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    handleFormData(state);
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {Object.entries(init).map(([key, value]) => (
            <TextField
              key={key}
              type={value.type}
              label={value.label}
              name={key}
              color="success"
              fullWidth
              focused
              onChange={handleChange}
              variant="standard"
              sx={{ marginBottom: "10px" }}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button type="reset" onClick={handleClose}>
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProjectForm;
