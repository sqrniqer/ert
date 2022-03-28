import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
//import styled from 'styled-components'
import './App.css';
import Frontpage from './pages/Frontpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/frontpage" element={<Frontpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
