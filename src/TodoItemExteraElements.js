import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/styles";
const styles = {
  main: {
    direction: "ltr",
  },
};
function TodoItemExteraElements({ classes }) {
  return (
    <Button className={classes.main}>
      <EditIcon />
    </Button>
  );
}

export default withStyles(styles)(TodoItemExteraElements);
