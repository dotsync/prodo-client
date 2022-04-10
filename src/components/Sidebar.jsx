import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar-navigation">
      <div className="sidebar-nav-item">
        <span class="material-icons">font_download</span>
        <h4>Home</h4>
      </div>
      <button className="sidebar-create-task-btn">New Task</button>
      <div className="sidebar-nav-item">
        <span class="material-icons">calendar_month</span>
        <h4>Calendar</h4>
      </div>
      <div className="sidebar-nav-item">
        <span class="material-icons">emoji_events</span>
        <h4>Goals</h4>
      </div>
      <div className="sidebar-nav-item">
        <span class="material-icons">view_list</span>
        <h4>Habits</h4>
      </div>
      <div className="sidebar-nav-item">
        <span class="material-icons">military_tech</span>
        <h4>Progress</h4>
      </div>
    </div>
  )
}
