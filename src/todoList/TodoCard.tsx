import { useCallback } from 'react'
import { Card, CardContent, CardHeader, IconButton, styled, Typography } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import { Todo } from './types'

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

interface Props {
  todo: Todo
  onDelete: (todoId: number) => void
}

export default function TodoCard({ todo, onDelete }: Props) {
  const onDeleteClick = useCallback(() => {
    onDelete(todo.id)
  }, [onDelete, todo])

  return (
    <StyledCard variant="outlined">
      <DeleteButton onClick={onDeleteClick}>
        <CancelIcon />
      </DeleteButton>
      <CardHeader title={todo.memo}></CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          memo created at: {todo.createdAt}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}
