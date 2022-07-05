import { ChangeEvent, useCallback, useState } from 'react'
import { Box, Button, Card, CardActions, OutlinedInput, styled } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TodoCard from './TodoCard'
import { Todo } from './types'

const dummyData: Todo[] = [
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
  const [todoList, setTodoList] = useState<Todo[]>(dummyData)
  const [input, setInput] = useState<string>('')

  const onDelete = useCallback(
    (todoID: number) => {
      const index = todoList.findIndex((todo) => todo.id === todoID)
      todoList.splice(index, 1)
      setTodoList([...todoList])
    },
    [todoList]
  )

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value
    setInput(newInput)
  }

  const onSubmit = () => {
    if (input !== '') {
      const newId = todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1
      const nowDate = new Date()

      todoList.push({
        id: newId,
        memo: input,
        createdAt: nowDate.toLocaleDateString(),
      })
      setInput('')
    }
  }

  return (
    <StyledBox>
      <StyledCard>
        {todoList.map((todo) => (
          <TodoCard key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
        <CardActions disableSpacing={true} style={{ display: 'flex', justifyContent: 'center' }}>
          <StyledInput value={input} onChange={onChangeInput} />
          <StyledButton onClick={onSubmit} endIcon={<SendIcon sx={{ color: 'white' }} />} />
        </CardActions>
      </StyledCard>
    </StyledBox>
  )
}
