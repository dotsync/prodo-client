import React, { useState } from 'react'
import BoardColumn from './BoardColumn'

const MOCKCOLUMNS = [
  {
    title: 'a',
    id: 1,
    tasks: [{
      title: 'fix delete multiple tasks bug',
      id: 1
    }],
  },
  {
    title: 'b',
    id: 2,
    tasks: [{
      title: 'design backend',
      id: 2
    }],
  },
  {
    title: 'c',
    id: 3,
    tasks: [],
  },
  {
    title: 'c',
    id: 4,
    tasks: [],
  },
  {
    title: 'd',
    id: 5,
    tasks: [],
  },
]

export default function ProjectBoard() {
  const [columns, setColumns] = useState([...MOCKCOLUMNS])
  return (
    <div className="project-board">
      <div className="board">
        {columns.map((c, colIdx) => {
          return <BoardColumn
          key={colIdx}
          title={c.title}
          colIdx={colIdx}
          columns={columns}
          tasks={c.tasks}
          setColumns={setColumns}
        />
        })}
      </div>
    </div>
  )
}
