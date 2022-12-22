import {useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');

  const handleClick = async() => {
      const response = await fetch('http://localhost:8000/', {mode: 'cors'});
      const json = await response.json();
      setNumber(json.number);
  };

  return (
    <div className="App">
      <h2>Random number</h2>
      <p>{number}</p>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default App;
