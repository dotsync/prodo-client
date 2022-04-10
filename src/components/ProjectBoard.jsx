import React, { useState } from 'react'
import BoardColumn from './BoardColumn';

export default function ProjectBoard({board}) {
  const [columns, setColumns] = useState(board.lists)
  return (
    <div className='project-board'>
      <div className='board'>
        {columns.map((c) => {
          return <BoardColumn tasks={c.tasks} name={c.title}/>
        })}
      </div>
    </div>
  )
}
