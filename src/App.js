import './App.css';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PageTitle from './components/PageTitle';
import Sidebar from './components/Sidebar';
import ProjectBoard from './components/ProjectBoard';
import Board from './models/Board';
import { useState } from 'react';

function App() {
  const mockBoard = new Board('mock board');
  mockBoard.initializeDefaultLists();
  const [board, setBoard] = useState(mockBoard);
  return (
    <div className='App'>
      <Sidebar />
      <Navbar />
      <PageTitle />
      <FilterBar />
      <ProjectBoard board={board}/>
    </div>
  );
}

export default App;
