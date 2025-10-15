import {Routes, Route} from 'react-router';
import Home from './pages/Home'
import Education from './pages/Education';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Experience from './pages/Experience';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/education" element={<Education />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/certificates" element={<Certificates />}></Route>
      <Route path="/experience" element={<Experience />}></Route>
    </Routes>
  )
}

export default App
