import React from 'react'

export default function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="filter-bar-tags">
        <button className="filter-bar-tag">planning</button>
        <button className="filter-bar-tag">phone call</button>
        <button className="filter-bar-tag">spike</button>
      </div>
      <div className="filter-bar-controls">
        <button>
          <span className="material-icons filter-bar-add-filter-btn">
            filter_list
          </span>
        </button>
      </div>
    </div>
  )
}
