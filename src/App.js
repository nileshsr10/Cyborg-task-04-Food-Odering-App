import './App.css';
import { Routes, Route } from "react-router-dom"
import { HashRouter } from "react-router-dom"
import Chinease from './Components/Chinease';
import Italian from "./Components/Italian"
import Indian from './Components/Indian';
import Home from './Components/Home';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/smartphone' element={<Italian/>} />
          <Route path='/accessories' element={<Chinease/>} />
          <Route path='/books' element={<Indian />} />
        </Routes>
      </HashRouter>




      {/* <div className="App">
     <Smarphone/>
     <Accessories/> 
     <Indian/>
    </div> */}
    </>
  );
}

export default App;
