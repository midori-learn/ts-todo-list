import { makeStyles, alpha } from "@material-ui/core/styles";

const homeStyles = makeStyles({
  container: {
    margin: 10,
    borderBottom: "1px solid gray",
    flex: 1,
  },
  box_todo_add: {
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: 40,
  },
  input_todo_add: {
    border: "0.5px solid #bcbcbc",
    borderRadius: 4,
    fontSize: 14,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: alpha("#3a3a3a", 0.1),
    "&:hover": {
      backgroundColor: alpha("#3a3a3a", 0.2),
    },
    height: "100%",
    margin: "0 10px 10px",
  },
  button_todo_add: {
    backgroundColor: "#5e76bb",
    "&:hover": {
      backgroundColor: "#3a4e65",
    },
    color: "#fff",
    width: 90,
    padding: "12.5px 5px",
    borderRadius: 4,
    height: "100%",
    margin: "0 10px",
  },
  box_list: {
    display: "flex",
    flex: 1,
  },
  list_item: {
    flex: 1/3,
  },
  title_list_item: {
    padding: 5,
    fontWeight: "bold",
    margin: "0 10px",
  },
  container_modal: {
    padding: 10,
    position: "absolute",
    top: "50vh",
    left: "50vw",
    zIndex: 3
  }
});

export default homeStyles;
