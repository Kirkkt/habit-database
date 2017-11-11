import React from "react"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "material-ui/Dialog"
import { compose, withState, withHandlers } from "recompose"
import { connect } from "react-redux"
import styled from "styled-components"
import { createHabit } from "../../../actions/habits"

const WidthHolder = styled.div`
  width: 400px;
`

const CreateDialog = ({isOpened, updateName, onCreateClick, onClose}) => (
  <Dialog open={isOpened} onRequestClose={onClose}>
    <WidthHolder />
    <DialogTitle>Create a new habit</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="New habit name"
        type="text"
        fullWidth
        onChange={event => updateName(event.target.value)}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>
        Cancel
      </Button>
      <Button onClick={onCreateClick} color="primary">
        Create
      </Button>
    </DialogActions>
  </Dialog>
)

export default compose(
  withState("name", "updateName", ""),
  connect(
    null,
    () => ({
      createHabit,
    })
  ),
  withHandlers({
    onCreateClick: ({ name, onClose }) => () => {
      createHabit(name)
      onClose()
    },
  })
)(CreateDialog)
