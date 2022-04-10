import './App.css';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PageTitle from './components/PageTitle';
import Sidebar from './components/Sidebar';
import ProjectBoard from './components/ProjectBoard';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <Navbar />
      <PageTitle />
      <FilterBar />
      <ProjectBoard />
    </div>
  );
}

export default App;
