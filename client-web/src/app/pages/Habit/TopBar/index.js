import React from "react"
import { connect } from "react-redux"
import { compose, withProps } from "recompose"
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
  position: fixed;
  display: flex;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`

const TopBar = ({
  history,
  id,
  habit: {
    name
  }
}) => (
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
)

export default compose(
  withRouter,
  connect(({ habitDetailedData }) => ({
    habitDetailedData,
  })),
  withProps(({ habitDetailedData, id }) => ({
    habit: habitDetailedData[id] || {},
  })),
)(TopBar)
