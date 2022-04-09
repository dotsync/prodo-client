import React from 'react'
import Task from './Task';

export default function BoardColumn({ name }) {
  const tasks = ["Create endpoint", "destroy cat", "cook dishes", "clean food"];
  /**
   * class Task {
   * title
   * description
   * }
   */
  return (
    <div className="board-column">
      <h3>{name}</h3>
      {tasks.map((t)=>{
          return (
              <Task title={t}/>
          )
      })}
    </div>
  )
}
