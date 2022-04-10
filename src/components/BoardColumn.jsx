import React, { useState } from 'react'
import Task from './Task'

export default function BoardColumn({ name, tasks }) {
  // const tasks = ['task a', 'task b', 'task c', 'task d', 'task d', 'task d', 'task d', 'task d']
  // const [tasks, setTasks] = useState(tasks)

  return (
    <div className="board-column">
      <div className="board-column-title">
        <h3>{name}</h3>
        <span  className="material-icons board-column-title-add-circle">
          add_circle
        </span>
      </div>
      {tasks.map((t) => {
        return <Task title={t.title} description={t.description} tags={t.tags}/>
      })}
    </div>
  )
}
