import { action } from "easy-peasy";

const model = {
  projects: [
    {
      deadline: "2022-08-26",
      description:
        "This is a dental treatment website. If you need any dental treatment you can search this website. The main feature of this site. You can see all treatment and treatment times. If you want to get an appointment with any doctor. You select your choice above date and click the appointment button.",
      id: "8JafZhPDU",
      tasks: ["eTirXyi_B"],
      title: "Doctor's Portal",
    },
    {
      deadline: "2022-10-20",
      description:
        "Every day we have a need to use any kind of web or mobile app. The chat application is one of them. The majority of present persons' first choice is a messaging system not call without urgent. If you want to use this app. You can create an account. Then login. There have many existing here. If you want to message them. You create a single messaging room or group messaging. Everybody like single room message for their secrete speech with others. Group also uses more and more purpose. If you are a very busy person. You don’t have enough time. You can use this system. When have got the time you can reply or message each other",
      id: "ASauHWxWB",
      tasks: ["xgUsHclui"],
      title: "Chat Web Application",
    },
  ],
  tasks: [
    {
      deadline: "2022-08-18",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: "eTirXyi_B",
      memberId: "2T9aOeC8_",
      name: "Navigation Bar",
      projectId: "8JafZhPDU",
      status: "pending",
    },
    {
      deadline: "2022-08-26",
      description:
        "You can create an account. Then login. There have many existing here. If you want to message them. You create a single messaging room or group messaging. Everybody like single room message for their secrete speech with others. Group also uses more and more purpose.",
      id: "xgUsHclui",
      memberId: "2T9aOeC8_",
      name: "User Chating Field",
      projectId: "ASauHWxWB",
      status: "Progress",
    },
  ],
  members: [
    {
      email: "zarif345@gmail.com",
      expert: "Node JS",
      id: "2T9aOeC8_",
      name: "Abdullah Al Zarif",
      tasks: ["8JafZhPDU|eTirXyi_B", "ASauHWxWB|xgUsHclui"],
    },
    {
      email: "labib123@gmail.com",
      expert: "React JS, Node JS, TypeScript",
      id: "sVrDOrYAC",
      name: "Assadullah Al Labib",
      tasks: [],
    },
  ],

  addProject: action((state, payload) => {
    state.projects.push(payload);
  }),

  addToTask: action((state, payload) => {
    state.tasks.push(payload);
    const project = state.projects.find(
      (item) => item.id === payload.projectId
    );
    project.tasks.push(payload.id);
    const member = state.members.find((item) => item.id === payload.memberId);
    member.tasks.push(`${payload.projectId}|${payload.id}`);
  }),
  addMember: action((state, payload) => {
    state.members.push(payload);
  }),
  updateTaskStatus: action((state, payload) => {
    const task = state.tasks.find((item) => item.id === payload.taskId);
    task.status = payload.status;
  }),
};

export default model;
