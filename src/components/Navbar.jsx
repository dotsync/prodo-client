import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-accordian">
        {'BoardName > CategoryName > ProjectName'}
      </div>
      <div className="navbar-auth">
        <button className="navbar-item">login</button>
      </div>
    </div>
  )
}
