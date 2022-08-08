import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const INIT_STATE = {
  title: "",
  description: "",
  deadline: "",
};

const ProjectForm = ({ open, handleClose, handleFormData }) => {
  const [project, setProject] = useState(INIT_STATE);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    handleFormData(project);
  };
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Create A New Project</DialogTitle>
        <DialogContent>
          <TextField
            type={"text"}
            name="title"
            fullWidth
            aria-label="Project Title"
            onChange={handleChange}
          />
          <TextField
            type={"text"}
            name="description"
            fullWidth
            aria-label="Project Description"
            onChange={handleChange}
          />
          <TextField
            type={"date"}
            name="deadline"
            fullWidth
            aria-label="Project Deadline"
            onChange={handleChange}
          />
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
