import { collatedTasks } from "../constants/index";

export const collatedTasksExsist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject);
