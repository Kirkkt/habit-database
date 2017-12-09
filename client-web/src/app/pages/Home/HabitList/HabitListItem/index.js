import React from "react"
import styled, { css } from "styled-components"
import { withRouter } from "react-router-dom"

import { shouldEnableQuickDelete } from "common/Config"
import { StreakTypes } from "common/Constants"
import { fetchHabitPreviewData } from "actions"

import { ActionWrapper, NameWrapper } from "app/components/styles"
import DeleteButton from "app/components/DeleteButton"
import TodayDoneCheckbox from "app/components/TodayDoneCheckbox"

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

const NameWrapperClickable = styled(NameWrapper)`
  cursor: pointer;
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
}) => (
  <Wrapper isOddItem={isOddItem}>
    <ActionWrapper>
      <TodayDoneCheckbox
        doneToday={doneToday}
        id={id}
        afterChecked={fetchHabitPreviewData}
      />
    </ActionWrapper>
    <NameWrapperClickable
      onClick={() => history.push(`/habit/${id}`)}
    >
      {name}
    </NameWrapperClickable>
    <Streak streak={streak} />
    { shouldEnableQuickDelete() && <ActionWrapper>
      <DeleteButton id={id} name={name} />
    </ActionWrapper> }
  </Wrapper>
)
export default withRouter(HabitItem)
