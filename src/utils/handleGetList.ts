import { Todo, status } from "../interfaces";

const getNotYetList = (list: Todo[]) => {
  return list.filter((item) => item.status === status.NOT_YET);
};

const getProcessList = (list: Todo[]) => {
  return list.filter((item) => item.status === status.PROCESS);
};

const getDoneList = (list: Todo[]) => {
  return list.filter((item) => item.status === status.DONE);
};

export { getNotYetList, getProcessList, getDoneList };
