import { useStoreState } from "easy-peasy";
import React from "react";
import { useParams } from "react-router-dom";

const TaskPage = () => {
  const { projectId } = useParams();
  const tasks = useStoreState((state) => state.tasks);
  console.log(tasks);

  return <div>Task Page</div>;
};

export default TaskPage;
