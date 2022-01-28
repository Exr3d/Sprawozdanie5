import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import png1060 from './1060.png';
import png1070 from './1070.jpg';
import png2060 from './2060.jpg';
import png2070 from './2070.jpg';
import png3060 from './3060.jpg';
import png3070 from './3070.jpg'
import png3080 from './3080.jpg';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

toast.configure()
let informacje;
const getFromApi = () => {
  Axios.get("http://127.0.0.1:8000/KartyGraficzne/api/karty/?format=json").then((response) => {
    var x =0
    informacje = []
    while (x < response.data.length) {
        informacje[x] = "Karta "+ response.data[x].Marka + " " + response.data[x].Model + ", VRAM: "+response.data[x].VRAM+ ", średnia cena: "+ response.data[x].avgCena + ", częstotliwość: " + response.data[x].czestotliwosc;
        console.log(informacje[x]);
        x++; // increment
        
      
    }
    return informacje;
    
    
  })
}



function App() {
  window.alert("Kliknij na obrazek, aby dostać informacje o danej karcie");
  getFromApi();
  return (
    
    <div className="App">
      <div className="imgs">
        <img src={ png1070 } onClick = {() => { 
          toast.info(informacje[0])
        }}/>
        <img src={ png1060 } onClick = {() => { 
          toast.info(informacje[1])
        }}/>
        <img src={ png2060 } onClick = {() => { 
          toast.info(informacje[2])
        }}/>
        <img src={ png2070 } onClick = {() => { 
          toast.info(informacje[3])
        }}/>
        <img src={ png3060 } onClick = {() => { 
          toast.info(informacje[4])
        }}/>
        <img src={ png3070 } onClick = {() => { 
          toast.info(informacje[5])
        }}/>
        <img src={ png3080 } onClick = {() => { 
          toast.info(informacje[6])
        }}/>
      </div>
    </div>
  );
}

export default App;
