import React, { useState } from 'react'
import Task from './Task'
import { useDrop } from 'react-dnd'

export default function BoardColumn({ name, columnTasks }) {
  const [tasks, setTasks] = useState(columnTasks)
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'BOX',
    drop: (item) => {
      console.log('drop item', item)
      addTaskToColumn(item.taskId)
    },
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const addTaskToColumn = (id) => {
    console.log(columnTasks)
    console.log(id)
    const newTask = tasks.filter((t)=> {return id === t.taskId})
    console.log('tasks state', tasks)

    setTasks([...newTask])
  }

  return (
    <div
      ref={drop}
      role={'Dustbin'}
      // style={{ border: isOver ? 'black 1px dotted' : '0px' }}
    >
      <div className="board-column" style={{ border: isOver ? 'black 1px dotted' : '0px' }}>
        <div className="board-column-title">
          <h3>{name}</h3>
          <span className="material-icons board-column-title-add-circle">
            add_circle
          </span>
        </div>
        {tasks.map((t) => {
          return (
            <Task
              title={t.title}
              description={t.description}
              tags={t.tags}
              taskId={t.taskId}
            />
          )
        })}
        {canDrop ? 'Release to drop' : 'Drag a box here'}
      </div>
    </div>
  )
}
