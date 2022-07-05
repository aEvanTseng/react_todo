import { Box, Button, Card, OutlinedInput, styled } from '@mui/material'

const dummyData = [
  {
    id: 1,
    memo: '繳手機費',
    createdAt: '2022/07/01',
  },
  {
    id: 2,
    memo: '晚上領包裹',
    createdAt: '2022/07/01',
  },
  {
    id: 3,
    memo: '上班',
    createdAt: '2022/07/03',
  },
]

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  margin: 20,
})

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 500,
  paddingTop: 20,
  paddingBottom: 10,
  borderRadius: 10,
  border: 'solid 1px #b0b0b0',
  background: 'rgb(244, 245, 247)',
})

const StyledButton = styled(Button)({
  height: 30,
  width: 50,
  marginLeft: 10,
  backgroundColor: '#1976d2',
  borderRadius: 10,
  '&:hover': {
    backgroundColor: '#1976d2',
    opacity: 0.8,
  },
})

const StyledInput = styled(OutlinedInput)({
  width: 350,
  height: 30,
  backgroundColor: 'white',
})

export default function TodoList() {
  return <></>
}
