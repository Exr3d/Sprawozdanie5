import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

const getFromApi = () => {
  Axios.get("http://127.0.0.1:8000/KartyGraficzne/api/karty/?format=json").then((response) => {
    console.log(response);
  })
}

function App() {
  return (
    <div className="App">
      <button onClick={ getFromApi }>POBIERZ</button>
    </div>
  );
}

export default App;
