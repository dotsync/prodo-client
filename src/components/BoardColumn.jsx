import React from 'react'
import Task from './Task'
import { useDrop } from 'react-dnd'

export default function BoardColumn({ title, colIdx, columns, setColumns, tasks }) {
  // const [tasks, setTasks] = useState(columnTasks)
  const [{ canDrop }, drop, isOver] = useDrop(
    () => ({
      accept: 'task',
      drop: (item) => {

        // prevents placing onto self
        if (item.currentColIdx === colIdx) return
        // make updated list of tasks for the departing column
        const oldTasks = columns[item.currentColIdx]['tasks']
        console.log('oldTasks', oldTasks)
        const updatedOldTasks = oldTasks.filter((task) => {
          console.log('task.id', task.id)
          return task.id !== item.id
        })
        console.log('updatedOldTasks', updatedOldTasks)
        const newColumns = [...columns]
        // remove task from old column
        newColumns[item.currentColIdx]['tasks'] = updatedOldTasks
        // add task to new column
        newColumns[colIdx]['tasks'].push(item.task)
        // update state
        // console.log('newColumns', newColumns)
        setColumns(newColumns)
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [],
  )

  return (

      <div ref={drop} className="board-column" style={{ border: isOver ? 'black 1px dotted' : '0px' }}>
        <div className="board-column-title">
          <h3>{title}</h3>
          <span className="material-icons board-column-title-add-circle">
            add_circle
          </span>
        </div>
        {tasks.map((t, taskIdx) => {
          return (
            <Task
            key={t.id}
              taskIdx={taskIdx}
              title={t.title}
              colIdx={colIdx}
              // tags={t.tags}
              task={t}
              id={t.id}
            />
          )
        })}
        {canDrop ? 'Release to drop' : 'Drag a box here'}
      </div>
  )
}
