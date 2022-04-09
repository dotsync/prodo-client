import './App.css';
import Navbar from './components/Navbar';
import PageNavigation from './components/PageNavigation';
import PageTitle from './components/PageTitle';
import Sidebar from './components/Sidebar';
import ProjectBoard from './components/ProjectBoard';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <Navbar />
      <PageTitle />
      <PageNavigation />
      <ProjectBoard />
    </div>
  );
}

export default App;
