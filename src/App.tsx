import React, { useState, useEffect } from "react";
import "./App.css";
import { Box, ButtonBase, InputBase } from "@material-ui/core";
import { handleAddTodo, handleUpdateTodo, handleDeleteTodo } from "./utils/handleCRUD";
import { Todo } from "./interfaces";
import { homeStyles } from "./styles";
import {
  getNotYetList,
  getProcessList,
  getDoneList,
} from "./utils/handleGetList";
import { sampleTodoList, defaultTodo } from "./utils/sample-data";
import { todosApi } from "./api";
import TodoItem from "./components/TodoItem";

const getTodos = async () => {
	const res = await todosApi.getAll();
	return res.data;
};

const App = () => {
  const styles = homeStyles();
  const [list, setList] = useState<Todo[]>([]);
	const [done, setDone] = useState<Todo[]>([]);
  const [notYet, setNotYet] = useState<Todo[]>([]);
  const [process, setProcess] = useState<Todo[]>([]);
  const getData = async () => {
     const data = await todosApi.getAll();
     setList(data.data);
     return data.data;
  };

	const addTodo = async () => {
		const newTodo = {...defaultTodo, id: list.length + 1, title: title};
		const data = await handleAddTodo(newTodo);
		setList(data.data);
		return data.data;
	};

	const updateTodo = async (newTodo:Todo) => {
		const data = await handleUpdateTodo(newTodo);
		setList(data.data);
		return data.data;
	};

	const deleteTodo = async (id:number) => {
		const data = await handleDeleteTodo(id);
		setList(data.data);
		return data.data;
	};
  useEffect (() => {
  	getData().then();
  } , []);

	useEffect (
	() => {
		setDone(getDoneList(list));
		setNotYet(getNotYetList(list));
		setProcess(getProcessList(list));
	},[list]);

  const [title, setTitle] = useState<string>("");
  return (
    <Box className={styles.container}>
      <Box className={styles.box_todo_add}>
        <InputBase
          placeholder="Input new todo ..."
          className={styles.input_todo_add}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <ButtonBase
          onClick={async () => await addTodo()}
          className={styles.button_todo_add}
        > Add </ButtonBase>
      </Box>
      <Box className={styles.box_list}>
        <Box className={styles.list_item}>
          <Box className={styles.title_list_item}>Not Yet</Box>
         {notYet.map((item, index) => (
         			<TodoItem
         				key = {index}
         				item = {item}
         				onClickUpdate = {async (value:Todo) => await updateTodo(value)}
         				onClickDelete = {async (value:number) => await deleteTodo(value)}
         			/>
         		))}
        </Box>
        <Box className={styles.list_item}>
          <Box className={styles.title_list_item}>Process</Box>
          {process.map((item, index) => (
          			<TodoItem
          				key = {index}
          				item = {item}
									onClickUpdate = {async (value:Todo) => await updateTodo(value)}
									onClickDelete = {async (value:number) => await deleteTodo(value)}
          			/>
          		))}
        </Box>
        <Box className={styles.list_item}>
          <Box className={styles.title_list_item}>Done</Box>
          {done.map((item, index) => (
          			<TodoItem
          				key = {index}
          				item = {item}
									onClickUpdate = {async (value:Todo) => await updateTodo(value)}
									onClickDelete = {async (value:number) => await deleteTodo(value)}
          			/>
          		))}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
