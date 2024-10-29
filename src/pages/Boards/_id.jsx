import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/Appbar'
import BoardBar from './Boardbar/Boardbar'
import BoardContent from './BoardContent/BoardContent'
function Board() {
  return (
    <Container disableGutters maxWidth={false}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board
