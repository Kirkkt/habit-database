import React from "react"
import { compose, withState, mapProps } from "recompose"
import AddButton from "./AddButton"
import CreateDialog from "./CreateDialog"
import HabitList from "./HabitList"

const Home = ({ createDialogOpened, toggleCreateDialogOpened }) => (
  <div>
    <HabitList />
    <AddButton onClick={toggleCreateDialogOpened} />
    <CreateDialog isOpened={createDialogOpened} onClose={toggleCreateDialogOpened} />
  </div>
)

export default compose(
  withState("createDialogOpened", "setCreateDialogOpened", false),
  mapProps(({ setCreateDialogOpened, ...rest }) => ({
    toggleCreateDialogOpened: () => setCreateDialogOpened(value => !value),
    ...rest,
  }))
)(Home)
