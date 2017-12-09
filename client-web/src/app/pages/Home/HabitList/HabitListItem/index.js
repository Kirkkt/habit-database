import React from "react"
import { compose, withHandlers } from "recompose"
import { connect } from "react-redux"
import styled, { css } from "styled-components"
import Checkbox from "material-ui/Checkbox"
import { withRouter } from "react-router-dom"

import { shouldEnableQuickDelete } from "common/Config"
import { StreakTypes } from "common/Constants"
import { setTodayDone, setTodayUndone } from "actions"

import DeleteButton from "app/components/DeleteButton"

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
    {streakType === StreakTypes.NEW ? StreakTypes.NEW : `${streakType.charAt(0)}${streakLength}`}
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
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
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
  history,
  isOddItem,
  toggleDoneToday,
}) => (
  <Wrapper isOddItem={isOddItem}>
    <ActionWrapper>
      <Checkbox
        checked={doneToday}
        onChange={toggleDoneToday}
      />
    </ActionWrapper>
    <NameWrapper
      onClick={() => history.push(`/habit/${id}`)}
    >
      {name}
    </NameWrapper>
    <Streak streak={streak} />
    { shouldEnableQuickDelete() && <ActionWrapper>
      <DeleteButton id={id} name={name} />
    </ActionWrapper> }
  </Wrapper>
)
export default compose(
  withRouter,
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
