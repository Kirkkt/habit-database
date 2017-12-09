import React from "react"
import { connect } from "react-redux"
import { compose, withProps, withState, withHandlers } from "recompose"

import ViewMode from "./ViewMode"
import EditMode from "./EditMode"

const EditableName = ({ id, editMode, name, toggleEditMode }) => editMode ? (
  <EditMode id={id} toggleEditMode={toggleEditMode} name={name} />
) : (
  <ViewMode toggleEditMode={toggleEditMode} name={name} />
)

export default compose(
  connect(({ habitDetailedData }) => ({ habitDetailedData })),
  withProps(({ habitDetailedData, id }) => ({
    name: (habitDetailedData[id] || {}).name,
  })),
  withState("editMode", "setEditMode", false),
  withHandlers({
    toggleEditMode: ({ setEditMode }) => () => setEditMode(v => !v),
  }),
)(EditableName)
