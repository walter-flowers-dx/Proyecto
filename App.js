import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import Platillos  from "./pages/Platillos";
import Home  from "./pages/Home";
import Default  from "./pages/Default";
import Promociones  from "./pages/Promociones";
import Identificacion  from "./pages/Identificacion";
import Videos from './pages/Videos';
import Ubicacion from './pages/Ubicacion';

function App() {
  return (
    <div>
      <h1>MENU</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="platillos" element={<Platillos />} />
           <Route path="/" element={<Home />} />
           <Route path="promociones" element={<Promociones />} />
            <Route path="identificacion" element={<Identificacion />} ></Route>  
            <Route path="videos" element={<Videos />} ></Route>  
            <Route path="ubicacion" element={<Ubicacion />} ></Route>  
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;