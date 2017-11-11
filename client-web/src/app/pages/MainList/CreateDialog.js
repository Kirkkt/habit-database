import React from "react"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "material-ui/Dialog"
import { compose, withState, withHandlers } from "recompose"
import styled from "styled-components"

const WidthHolder = styled.div`
  width: 400px;
`

const CreateDialog = ({isOpened, name, updateName, onCreate, onCancel}) => (
  <Dialog open={isOpened} onRequestClose={onCancel}>
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
      <Button onClick={onCancel}>
        Cancel
      </Button>
      <Button onClick={onCreate} color="primary">
        Create
      </Button>
    </DialogActions>
  </Dialog>
)

export default compose(
  withState("name", "updateName", ""),
  withHandlers({
    onCreate: ({ name, onClose }) => () => {
      console.log(name)
      onClose()
    },
    onCancel: ({ onClose }) => () => {
      onClose()
    },
  })
)(CreateDialog)
