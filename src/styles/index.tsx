import { makeStyles, alpha } from "@material-ui/core/styles";
import homeStyles from "./pages/homeStyles";

const theme = makeStyles({
  container: {
    backgroundColor: "lightblue",
    padding: 10,
    flex: 1,
  },
  header: {
    backgroundColor: "lightblue",
    width: "100vw",
  },
  itemHeader: {
    width: 100,
    textDecorate: "none",
  },
  link: {
    fontWeight: "bold",
    padding: 5,
    width: 100,
    borderRadius: 4,
    "&:hover, &:focus": {
      backgroundColor: alpha("#3a3a3a", 0.05),
      "& > p": {
        textDecoration: "underline"
      },
    },
  },
});

export { theme, homeStyles };
