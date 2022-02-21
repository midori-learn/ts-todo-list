import { randomBytes } from "crypto";
import { Todo } from "../interfaces";

let list: Todo[] = [];
for (let index = 0; index < 15; index++) {
  const check = [true, false][(Math.random() * 2) | 0];
  list.push({
    id: index + 1,
    title: "todo " + index,
    checked: check,
    note: "note " + index,
    deadline: new Date(2021, 12, 12),
    status: check ? "done" : ["process", "not yet"][(Math.random() * 2) | 0],
  });
}

export const defaultTodo: Todo = {
  id: 0,
  title: "default title",
  checked: false,
  note: "default note",
  deadline: new Date(1999, 10, 13),
  status: "not yet",
};

export const sampleTodoList = list;
