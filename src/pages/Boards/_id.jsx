import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/Appbar'
import BoardBar from './Boardbar/Boardbar'
import BoardContent from './BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsApi } from '~/apis'
function Board() {
  // Fetch board data from API
  const [board, setBoard] = useState([])
  useEffect(() => {
    const boardId = '6745319c716d01ce27ea649f'
    fetchBoardDetailsApi(boardId).then((board) => {
      setBoard(board)
    })
  }, [])
  return (
    <Container disableGutters maxWidth={false}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={board} />
    </Container>
  )
}

export default Board
