import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import PanelProyecto from './pages/PanelProyecto/PanelProyecto';

function App() {
  return (
    <BrowserRouter>
      <div className='main-screen' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='main' element={<Main />}/>
          <Route path='proyectos' element={<PanelProyecto />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;