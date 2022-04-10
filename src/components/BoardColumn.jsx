import React from 'react'
import Task from './Task'

export default function BoardColumn({ name }) {
  const tasks = ['task a', 'task b', 'task c', 'task d']
  /**
   * class Task {
   * title
   * description
   * }
   */

  return (
    <div className="board-column">
      <div className="board-column-title">
        <h3>{name}</h3>
        <span  className="material-icons board-column-title-add-circle">
          add_circle
        </span>
      </div>
      {tasks.map((t) => {
        return <Task title={t} />
      })}
    </div>
  )
}
