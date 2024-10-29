import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function ListColumns({ columns }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        width: '100%',
        height: '100%',
        overflowX: 'auto',
        m: '0 16px',
        gap: 2
      }}
    >
      {columns?.map((column) => (
        <Column key={column._id} column={column} />
      ))}
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
          Add new Column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
