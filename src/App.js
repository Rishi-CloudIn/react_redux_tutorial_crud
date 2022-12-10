
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import TutotialList from './components/TutorialList';
import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutotial';
import Navbar from './Navbar';
function App ()
{
  return (
    <div className='container-fluid px-0 mx-0'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TutotialList />} />
        <Route exact path="/add" element={<AddTutorial />} />
        <Route path="/tutorials/:id" element={<Tutorial />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>

  );
}

export default App;
