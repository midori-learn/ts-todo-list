import React from "react";
import { Todo, status } from "../interfaces";
import { todosApi } from "../api";

const defaultTodo: Todo = {
  id: 0,
  title: "default title",
  checked: false,
  note: "default note",
  deadline: new Date(1999, 10, 13),
  status: status.NOT_YET,
};

const handleAddTodo = async (newTodo: Todo) => {
  await todosApi.add(newTodo);
  const data = await todosApi.getAll();
  return data;
};

const handleUpdateTodo = async (todo: Todo = defaultTodo) => {
  await todosApi.update(todo);
  const data = await todosApi.getAll();
  return data;
};

const handleDeleteTodo = async (id: number) => {
	await todosApi.remove(id);
	const data = await todosApi.getAll();
  return data;
};

export { handleAddTodo, handleUpdateTodo, handleDeleteTodo };
