import React from "react"
import { compose, withState, withHandlers, mapProps } from "recompose"
import { connect } from "react-redux"
import styled, { css } from "styled-components"
import Checkbox from "material-ui/Checkbox"
import { shouldEnableQuickDelete } from "../../../../../common/Config"
import DeleteDialog from "./DeleteDialog"
import { setDone, setUndone } from "../../../../../actions/records"

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #eee;
  padding: 10px;
  display: flex;
  ${props => props.isOddItem && css`
    background: #f3f3f3;
  `}
`

const NameWrapper = styled.div`
  width: 100%;
  margin: auto;
`

const ActionWrapper = styled.div`
  width: 40px;
  margin: auto 10px;
`

const getDoneToday = timestamps => {
  const todayDateString = (new Date()).toDateString()
  return timestamps.some(
    timestamp => (new Date(timestamp)).toDateString() === todayDateString
  )
}

const HabitItem = ({
  habit: {
    name,
    id,
  },
  timestamps,
  isOddItem,
  deleteDialogOpened,
  toggleDeleteDialogOpened,
  toggleDoneToday,
}) => (
  <Wrapper isOddItem={isOddItem}>
    <ActionWrapper>
      <Checkbox
        checked={getDoneToday(timestamps)}
        onChange={toggleDoneToday}
      />
    </ActionWrapper>
    <NameWrapper>{name}</NameWrapper>
    { shouldEnableQuickDelete() && <ActionWrapper>
      <button onClick={toggleDeleteDialogOpened}>-</button>
    </ActionWrapper> }
    <DeleteDialog
      name={name}
      id={id}
      isOpened={deleteDialogOpened}
      onClose={toggleDeleteDialogOpened}
    />
  </Wrapper>
)
export default compose(
  withState("deleteDialogOpened", "setDeleteDialogOpened", false),
  mapProps(({ setDeleteDialogOpened, ...rest }) => ({
    toggleDeleteDialogOpened: () => setDeleteDialogOpened(value => !value),
    ...rest,
  })),
  withHandlers({
    toggleDoneToday: ({ habit: { id }, timestamps }) => () => {
      if (getDoneToday(timestamps)) {
        setUndone(id)
      } else {
        setDone(id)
      }
    }
  }),
  connect(
    null,
    () => ({
      setDone,
      setUndone,
    })
  )
)(HabitItem)
