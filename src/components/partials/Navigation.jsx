import MenuIcon from "@mui/icons-material/Menu";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Button, Container, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";
import { Link as BrowserRoute } from "react-router-dom";
import { generate } from "shortid";
import useToggle from "../../hooks/useToggle";
import { member_INIT, project_INIT } from "../../utils/constants";
import ProjectForm from "../partials/ProjectForm";

const Navigation = () => {
  const { open, handleClickOpen, handleClose } = useToggle();
  const [toggle, setToggle] = useState("");
  const { addProject, addMember } = useStoreActions((state) => state);

  const handleProject = (data) => {
    data.id = generate();
    data.tasks = [];
    addProject(data);
  };
  const handleMember = (data) => {
    data.id = generate();
    data.tasks = [];
    addMember(data);
  };

  const handleToggle = (str) => {
    setToggle(str);
    handleClickOpen();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Link
              to="/"
              component={BrowserRoute}
              color={"#fff"}
              style={{
                display: "flex",
                flexGrow: "1",
                textDecoration: "none",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                MUI
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                variant="contained"
                color="warning"
                sx={{ color: "#fff" }}
                to="/member"
                component={BrowserRoute}
              >
                Members
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleToggle("project")}
              >
                Create New Project
              </Button>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  mx: 2,
                }}
                onClick={() => handleToggle("member")}
              >
                <PersonAddAltIcon />
              </Button>
            </Box>
            {toggle === "project" && (
              <ProjectForm
                handleClose={handleClose}
                open={open}
                handleFormData={handleProject}
                title="Create New Project"
                init={project_INIT}
              />
            )}
            {toggle === "member" && (
              <ProjectForm
                handleClose={handleClose}
                open={open}
                handleFormData={handleMember}
                title="Add New Member"
                init={member_INIT}
              />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navigation;
