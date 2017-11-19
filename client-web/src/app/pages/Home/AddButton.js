import React from "react"
import Button from "material-ui/Button"
import styled from "styled-components"
import AddIcon from "material-ui-icons/Add"

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`

const AddButton = ({ onClick }) => (
  <Wrapper>
    <Button
      fab
      color="primary"
      aria-label="add"
      onClick={onClick}
    >
      <AddIcon />
    </Button>
  </Wrapper>
)

export default AddButton
