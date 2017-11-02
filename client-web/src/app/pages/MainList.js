import React from "react"
import { withStyles } from "material-ui/styles"
import Button from "material-ui/Button"
import AddIcon from "material-ui-icons/Add"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

const AddButton = ({ classes }) => (
  <div>
    <Button
      fab
      color="primary"
      aria-label="add"
      className={classes.button}
      onClick={() => alert('yo')}
    >
      <AddIcon />
    </Button>
  </div>
)

export default withStyles(styles)(AddButton)
