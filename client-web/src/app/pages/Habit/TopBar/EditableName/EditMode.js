import React from "react"
import { compose, withState } from "recompose"
import TextField from "material-ui/TextField"

import { renameHabit } from "actions"

import { NameWrapper } from "./styles"

const EditMode = ({ id, name, nameUnderEdit, setNameUnderEdit, toggleEditMode }) => (
  <NameWrapper>
    <TextField
      autoFocus
      margin="dense"
      id="name"
      type="text"
      value={nameUnderEdit || name}
      fullWidth
      style={{
        marginTop: 0,
        marginBottom: 0,
        height: 24,
      }}
      onChange={event => setNameUnderEdit(event.target.value)}
      onKeyPress={event => {
        if (event.key === "Enter") {
          renameHabit(id, (nameUnderEdit || name).trim())
          toggleEditMode()
          event.preventDefault();
        }
      }}
    />
  </NameWrapper>
)

export default compose(
  withState("nameUnderEdit", "setNameUnderEdit", ""),
)(EditMode)
