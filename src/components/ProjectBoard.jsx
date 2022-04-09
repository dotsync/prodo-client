import React from 'react'
import BoardColumn from './BoardColumn';

export default function ProjectBoard() {
  const columns = ["TO DO","IN PROGRESS","IN REVIEW","BACKLOG","DONE"];
  /**
   * class Column {
   * title: TO DO
   * tasks: [taskId, taskId, taskId]
   * }
   */
  return (
    <div className='project-board'>
      <div className='board'>
        {columns.map((c) => {
          return <BoardColumn name={c}/>
        })}
      </div>
    </div>
  )
}
