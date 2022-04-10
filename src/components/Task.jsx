import React from 'react'

export default function Task({ title, description, tags }) {
  return (
    <div className="task">
      <h3>{title}</h3>
      <div>{description}</div>
      <div className="task-tags">
        {/* <div className="task-tag">spike</div>
        <div className="task-tag">planning</div> */}
        {tags.map((t)=><div className="task-tag">{t}</div>)}

      </div>
    </div>
  )
}
