import React from "react"
import { compose, withState, mapProps } from "recompose"
import IconButton from "material-ui/IconButton"
import DeleteIcon from "material-ui-icons/Delete"
import Tooltip from "material-ui/Tooltip"

import DeleteDialog from "./DeleteDialog"

const DeleteButton = ({ name, id, deleteDialogOpened, toggleDeleteDialogOpened }) => (
  <span>
    <Tooltip id="tooltip-icon" title="Delete" placement="left">
      <IconButton aria-label="Delete" onClick={toggleDeleteDialogOpened} tooltip="Delete">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
    <DeleteDialog
      name={name}
      id={id}
      isOpened={deleteDialogOpened}
      onClose={toggleDeleteDialogOpened}
    />
  </span>
)

export default compose(
  withState("deleteDialogOpened", "setDeleteDialogOpened", false),
  mapProps(({ setDeleteDialogOpened, ...rest }) => ({
    toggleDeleteDialogOpened: () => setDeleteDialogOpened(value => !value),
    ...rest,
  })),
)(DeleteButton)
