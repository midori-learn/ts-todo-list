import axios from "axios";

const axiosClient = axios.create({
	baseURL: "https://61b57db90e84b70017331b18.mockapi.io/",
	headers: {
		"content-type": "application/json",
	}
});

export { axiosClient };