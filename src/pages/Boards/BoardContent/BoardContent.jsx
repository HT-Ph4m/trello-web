import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  MouseSensor,
  // PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 }
  // })
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 }
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 }
  })
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumns, setOrderedColumns] = useState([])
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])
  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      // *************************************************************************//
      //Cách 1
      // const newColumnOrderIds = [...board.columnOrderIds]
      // const fromIndex = newColumnOrderIds.indexOf(active.id)
      // const toIndex = newColumnOrderIds.indexOf(over.id)
      // newColumnOrderIds.splice(fromIndex, 1)
      // newColumnOrderIds.splice(toIndex, 0, active.id)
      // board.columnOrderIds = newColumnOrderIds
      // setOrderedColumns(mapOrder(board?.columns, newColumnOrderIds, '_id'))
      // Update the column order in the database or save it to a local state.
      // Fetch the updated board data and update the state with the new order.
      // ...
      // *************************************************************************//
      //Cách 2
      // lấy vị trí cũ
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
      //lấy vị trí mới
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      const newOrderedColumnIds = dndOrderedColumns.map((c) => c._id)
      // console.log(newOrderedColumnIds, dndOrderedColumns)
      setOrderedColumns(dndOrderedColumns)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          height: (theme) => theme.trello.boardContentHeight,
          display: 'flex',
          alignItems: 'start',
          width: '100%',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
