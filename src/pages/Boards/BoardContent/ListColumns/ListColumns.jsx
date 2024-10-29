import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { color } from '@mui/system'

function ListColumns() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        width: '100%',
        height: '100%',
        overflowX: 'auto',
        '&:last-child': {
          mr: 2
        },
        '&:first-child': {
          ml: 2
        },
        gap: 2
      }}
    >
      <Column />
      <Column />
      <Column />
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          height: 'fit-content',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: '#ffffff3d',
          borderRadius: '4px'
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{ color: 'white', width: '100%' }}
        >
          {' '}
          Add new Column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
