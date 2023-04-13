import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>
        Track
      </h1>
      <p1>
        Push this button everytime you do something good for the environment
      </p1>
        <div>
            <Button />
        </div>
    </div>
  );
}

function Button(){
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return(
    <button className="button" onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default App;
