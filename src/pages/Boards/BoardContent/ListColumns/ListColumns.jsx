import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  return (
    <SortableContext items={columns?.map((c) => c._id)} strategy={horizontalListSortingStrategy}>
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
            cursor: 'pointer',
            backgroundColor: '#ffffff3d',
            borderRadius: '4px'
          }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              color: 'white',
              width: '100%',
              justifyContent: 'start',
              pl: 2
            }}
          >
            Add new Column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
