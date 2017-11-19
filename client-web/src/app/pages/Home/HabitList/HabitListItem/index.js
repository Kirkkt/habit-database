import React from "react"
import { compose, withState, withHandlers } from "recompose"
import styled, { css } from "styled-components"
import { connect } from "react-redux"
import { deleteHabit } from "../../../../../actions/habits"

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #eee;
  padding: 10px;
  display: flex;
  ${props => props.isOddItem && css`
    background: #f3f3f3;
  `}
`

const NameWrapper = styled.div`
  display: flex-box;
  width: calc(100% - 40px);
`

const ActionWrapper = styled.div`
  display: flex-box;
  width: 40px;
  background-color: blue;
`

const HabitItem = ({ habit: { name }, isOddItem }) => (
  <Wrapper isOddItem={isOddItem}>
    <NameWrapper>{name}</NameWrapper>
    <ActionWrapper></ActionWrapper>
  </Wrapper>
)
export default compose(
)(HabitItem)
