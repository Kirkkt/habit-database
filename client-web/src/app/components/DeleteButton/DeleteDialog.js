import React from "react"
import { compose, withHandlers } from "recompose"
import Button from "material-ui/Button"
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "material-ui/Dialog"
import styled from "styled-components"

import { deleteHabit } from "actions"

const WidthHolder = styled.div`
  width: 400px;
`

const Name = styled.span`
  color: teal;
`

const DeleteDialog = ({isOpened, onDelete, onClose, name, id}) => (
  <Dialog open={isOpened} onRequestClose={onClose}>
    <WidthHolder />
    <DialogTitle>Delete a habit</DialogTitle>
    <DialogContent>
      <p>Are you sure you want to delete habit <Name>{name}</Name>?</p>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>
        Cancel
      </Button>
      <Button onClick={onDelete} color="primary">
        Delete
      </Button>
    </DialogActions>
  </Dialog>
)

export default compose(
  withHandlers({
    onDelete: ({ id, onClose, afterDelete }) => () => {
      deleteHabit({ id, callback: afterDelete })
      onClose()
    },
  })
)(DeleteDialog)
