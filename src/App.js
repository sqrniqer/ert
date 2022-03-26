import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import styled from 'styled-components'
import './App.css';
import MainpageProductShowcase from './components/MainpageProductShowcase/MainpageProductShowcase'



function App() {
  return (
    <div className="App">
      <MainpageProductShowcase  photo="/images/DIN931.png" Title='z łbem sześciokątnym'/>
    </div>

  );
}

export default App;
