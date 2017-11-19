import React from "react"
import { compose, withState, mapProps } from "recompose"
import styled, { css } from "styled-components"
import DeleteDialog from "./DeleteDialog"

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
`

const HabitItem = ({
  habit: {
    name,
    id,
  },
  isOddItem,
  deleteDialogOpened,
  toggleDeleteDialogOpened,
}) => (
  <Wrapper isOddItem={isOddItem}>
    <NameWrapper>{name}</NameWrapper>
    <ActionWrapper>
      <button onClick={toggleDeleteDialogOpened}>-</button>
    </ActionWrapper>
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
  }))
)(HabitItem)
