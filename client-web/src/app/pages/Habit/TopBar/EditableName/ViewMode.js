import React from "react"
import Tooltip from "material-ui/Tooltip"
import IconButton from "material-ui/IconButton"
import Edit from "material-ui-icons/Edit"
import { NameWrapper } from "./styles"

const ViewMode = ({ name, toggleEditMode }) => (
  <NameWrapper>
    {name}
    <Tooltip id="tooltip-icon" title="Rename" placement="bottom">
      <IconButton
        style={{ width: 14, height: 14, marginLeft: 6, color: "teal" }}
        aria-label="Edit"
        onClick={toggleEditMode}
        tooltip="Rename"
      >
        <Edit style={{ height: 14, width: 14 }} />
      </IconButton>
    </Tooltip>
  </NameWrapper>
)

export default ViewMode
