import React, { useState } from 'react'
import BoardColumn from './BoardColumn'
import { useDrop } from 'react-dnd'

export default function ProjectBoard({ board }) {
  const [columns, setColumns] = useState([...board.lists])
  // const [{ canDrop, isOver }, drop] = useDrop(() => ({
  //   // The type (or types) to accept - strings or symbols
  //   accept: 'BOX',
  //   drop: ()=> {console.log('dropped')},
  //   // Props to collect
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     canDrop: monitor.canDrop()
  //   })
  // }))
  return (
    <div className="project-board">
      <div className="board">
        {columns.map((c) => {
          return <BoardColumn columnTasks={c.tasks} name={c.title}/>
        })}
      </div>
    </div>
  )
}
