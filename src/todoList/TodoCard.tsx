import { Card, IconButton, styled, Typography } from '@mui/material'

const StyledCard = styled(Card)({
  position: 'relative',
  width: 400,
  margin: 10,
  padding: 10,
  borderRadius: 10,
  '& .createAt': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
})

const DeleteButton = styled(IconButton)({
  position: 'absolute',
  width: 20,
  height: 20,
  top: 0,
  right: 0,
})

export default function TodoCard() {
  return <></>
}
