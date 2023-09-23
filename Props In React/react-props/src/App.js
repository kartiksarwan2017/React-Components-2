import './App.css';
import Student from "./Student.js";

function App() {
  return (
    <div className="App">
      <Student stuname="Krishna!" marks={80} />
      <Student stuname="Balram!" marks={70} />
    </div>
  );
}

export default App;
