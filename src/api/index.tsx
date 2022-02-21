import React from "react";
import { Todo } from "../interfaces";
import { axiosClient } from "./axiosClient";

const todosApi = {
	async getAll(){
		const response = await axiosClient.get("/todos");
		console.log("response get all: ", response);
		return response;
	},

	get(id:number) {
		const url = `todos/${id}`;
		const res = axiosClient.get(url);
		console.log("get id: ", res);
		return res;
	},

	add(data:Todo) {
		const url = "todos";
		return axiosClient.post(url, data);
	},

	update(data:Todo) {
		const url = `todos/${data.id}`;
		return axiosClient.put(url, data);
	},

	remove(id:number) {
		const url = `todos/${id}`;
		return axiosClient.delete(url);
	}
};

export { todosApi };
