import React from 'react'

export default function Task({ title }) {
  return (
    <div className="task">
      <h3>{title}</h3>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, p</div>
      <div className="task-tags">
        <div className="task-tag">spike</div>
        <div className="task-tag">planning</div>

      </div>
    </div>
  )
}
