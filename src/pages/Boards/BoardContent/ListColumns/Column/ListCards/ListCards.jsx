import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards({ cards }) {
  return (
    <Box
      sx={{
        m: '0 5px',
        p: '0 5px',
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - 
      ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight} - 
      ${theme.spacing(5)})`,
        display: 'flex',
        gap: 1,
        flexDirection: 'column',
        overflowX: 'hidden',
        overflowY: 'auto',
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
      }}
    >
      {cards?.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </Box>
  )
}

export default ListCards
