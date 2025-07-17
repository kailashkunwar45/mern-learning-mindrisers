export const gettasksFromLocal = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks === null ? [] : JSON.parse(tasks);
};

export const settasksToLocal = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
