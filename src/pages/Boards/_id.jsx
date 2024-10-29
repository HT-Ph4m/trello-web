import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/Appbar'
import BoardBar from './Boardbar/Boardbar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
function Board() {
  return (
    <Container disableGutters maxWidth={false}>
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board} />
    </Container>
  )
}

export default Board
