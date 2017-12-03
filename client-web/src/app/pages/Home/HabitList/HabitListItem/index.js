import React from "react"
import { compose, withState, withHandlers, mapProps } from "recompose"
import { connect } from "react-redux"
import styled, { css } from "styled-components"
import Checkbox from "material-ui/Checkbox"

import { shouldEnableQuickDelete } from "common/Config"
import { setTodayDone, setTodayUndone } from "actions"

import DeleteDialog from "./DeleteDialog"

const StreakText = styled.div`
  display: inline;
  color: #bbb;
  margin: auto 10px;
`

const Streak = ({
  streak: {
    streakType,
    streakLength,
  },
}) => (
  <StreakText>
    {streakType === "NEW" ? "NEW" : `${streakType.charAt(0)}${streakLength}`}
  </StreakText>
)

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

const HabitItem = ({
  habit: {
    name,
    id,
    doneToday,
    streak,
  },
  isOddItem,
  deleteDialogOpened,
  toggleDeleteDialogOpened,
  toggleDoneToday,
}) => (
  <Wrapper isOddItem={isOddItem}>
    <ActionWrapper>
      <Checkbox
        checked={doneToday}
        onChange={toggleDoneToday}
      />
    </ActionWrapper>
    <NameWrapper>{name}</NameWrapper>
    <Streak streak={streak} />
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
    toggleDoneToday: ({
      habit: {
        id,
        doneToday,
      },
    }) => () => {
      if (doneToday) {
        setTodayUndone(id)
      } else {
        setTodayDone(id)
      }
    }
  }),
  connect(
    null,
    () => ({
      setTodayDone,
      setTodayUndone,
    })
  )
)(HabitItem)
