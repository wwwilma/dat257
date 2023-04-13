import logo from './logo.svg';
import './App.css';

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
  return(
    <button className="button">
      *Insert count value here*
    </button>
  );
}

export default App;
