import React from 'react'
import { useDrag } from 'react-dnd'

// perhaps a column can be passed into the item object



export default function Task({ title, description, tags, taskId }) {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: 'BOX',
    item: {taskId: taskId},
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {/* The drag ref marks this node as being the "pick-up" node */}
      {/* <div role="Handle" ref={drag} /> */}

      <div role="Handle" ref={drag} className="task">
        <h3>{title}-{taskId}</h3>
        <div>{description}</div>
        <div className="task-tags">
          {/* <div className="task-tag">spike</div>
        <div className="task-tag">planning</div> */}
          {tags.map((t) => (
            <div className="task-tag">{t}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
