import React from "react"
import { compose } from "recompose"
import { withRouter } from "react-router-dom"
import IconButton from "material-ui/IconButton"
import ChevronLeft from "material-ui-icons/ChevronLeft"
import styled from "styled-components"
import Tooltip from "material-ui/Tooltip"

const TopNavigator = styled.div`
  background: #f3f3f3;
  position: fixed;
  width: 100%;
`

const TopBar = ({ history }) => (
  <TopNavigator>
    <Tooltip id="tooltip-icon" title="Go back" placement="bottom">
      <IconButton aria-label="ChevronLeft" onClick={history.goBack} tooltip="Go back">
        <ChevronLeft />
      </IconButton>
    </Tooltip>
    <span>
    </span>
  </TopNavigator>
)

export default compose(
  withRouter,
)(TopBar)
