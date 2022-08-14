import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { useStoreState } from "easy-peasy";
import useToggle from "../../hooks/useToggle";
import TaskDetails from "./TaskDetails";

const Root = styled("div")`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #ddd;
  }
`;

const TasksView = ({ tasks }) => {
  const { handleClickOpen, handleClose, open } = useToggle();
  const members = useStoreState((state) => state.members);

  const showMember = (id) => {
    const member = members.find((member) => member.id === id);
    return member.name;
  };

  return (
    <Root sx={{ maxWidth: "100%" }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Name</th>
            <th>Deadline</th>
            <th>Member</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.deadline}</td>
              <td>{showMember(item.memberId)}</td>
              <td>{item.status}</td>
              <td>
                <Button onClick={handleClickOpen}>About Task</Button>
                <TaskDetails
                  handleClose={handleClose}
                  open={open}
                  task={item}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Root>
  );
};

export default TasksView;
