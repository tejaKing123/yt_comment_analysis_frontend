import './App.css';
// import axios from 'axios';
import {useState,useEffect} from 'react';
import { Display } from './components/Display';
import InputUrl  from './components/InputUrl';
import {Container} from "semantic-ui-react";

function App() {
  const [info, setInfo] = useState([])

  const apiURL = "http://127.0.0.1:5000/analysis"

  useEffect(() => {
    fetch(apiURL).then(response =>
      response.json().then(data => {
        setInfo(data.movies);
        console.log(data.movies);
      })
    );
  }, []);
  return (
    <div className="App">
      <Container>
      <InputUrl onNewLink={video=> setInfo(currentInfo=>[...currentInfo,video])}/>
      <Display info={info}/>
      </Container>
      {/* {JSON.stringify(info)} */}
    </div>
  );
}

export default App;
