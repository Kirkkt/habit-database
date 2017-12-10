import React from "react"
import { withRouter } from "react-router-dom"
import IconButton from "material-ui/IconButton"
import ChevronLeft from "material-ui-icons/ChevronLeft"
import styled from "styled-components"
import Tooltip from "material-ui/Tooltip"

import { NameWrapper, ActionWrapper } from "app/components/styles"
import DeleteButton from "app/components/DeleteButton"

import EditableName from "./EditableName"

const TopNavigator = styled.div`
  background: #f3f3f3;
  box-sizing: border-box;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`

const PlaceHolder = styled.div`
  height: 60px;
`

const TopBar = ({
  history,
  id,
  name,
}) => (
  <div>
    <TopNavigator>
      <Tooltip id="tooltip-icon" title="Go back" placement="bottom">
        <IconButton aria-label="ChevronLeft" onClick={history.goBack} tooltip="Go back">
          <ChevronLeft />
        </IconButton>
      </Tooltip>
      <NameWrapper>
        <EditableName id={id} />
      </NameWrapper>
      <ActionWrapper>
        <DeleteButton name={name} id={id} afterDelete={() => history.push("/")} />
      </ActionWrapper>
    </TopNavigator>
    <PlaceHolder />
  </div>
)

export default withRouter(TopBar)
