import { useContext } from 'react';
import './App.css';
import Socialstate from './context/Socialstate';
import About from './About';

function App() {
 
  return (
    <Socialstate>
      <h1>Hello I Am Shivanshu Tiwari</h1>
      <About/>
    </Socialstate>
    
  );
}

export default App;
