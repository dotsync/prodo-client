import './App.css'
import Navbar from './components/Navbar'
import FilterBar from './components/FilterBar'
import PageTitle from './components/PageTitle'
import Sidebar from './components/Sidebar'
import ProjectBoard from './components/ProjectBoard'
import Board from './models/Board'
import { useState } from 'react'

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
  const mockBoard = new Board('mock board')
  mockBoard.initializeDefaultLists()
  const [board, setBoard] = useState(mockBoard)
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Sidebar />
        <Navbar />
        <PageTitle />
        <FilterBar />
        <ProjectBoard board={board} />
      </div>
    </DndProvider>
  )
}

export default App
