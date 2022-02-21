import { makeStyles } from "@material-ui/core/styles";

const componentStyle = makeStyles({
  button: {
    minWidth: 80,
    padding: 10,
    borderRadius: 8,
  },
  edit_modal: {},
  box_flex: {
    display: "flex",
    marginLeft: 10,
  },
  input: {
    border: "1px solid gray",
    backgroundColor: "gray",
    color: "black",
    width: 200,
    borderRadius: 8,
  },
  dropdown: {
    border: "1px solid gray",
    backgroundColor: "gray",
    width: "fit-content",
    padding: 10,
    borderRadius: 8,
  },
  button_add: {
    minWidth: 80,
    padding: 10,
    backgroundColor: "blue",
    color: "#fff",
    borderRadius: 8,
  },
});

const layout = makeStyles({});

const todoItem = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    width: "20vw",
    justifyContent:"space-between",
    alignItems: "center"
  },
  box_flex: {

  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    marginLeft: 10
  },
  titleDoneState: {
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    textDecoration: "line-through",
    marginLeft: 10
  },
  button_process: {
    marginRight: 10,
    padding: 5,
    backgroundColor: "lightblue",
    borderRadius: 4,
  },
  icon: {
    marginRight: 5,
  },
});
export { componentStyle, layout, todoItem };
