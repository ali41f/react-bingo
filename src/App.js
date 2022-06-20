import {useState} from 'react';
import Header from './components/Header';
import Grid from  './components/Grid'
import './App.css';

function App() {

  const [isBingo, setIsBingo] = useState(false);

  return (
    <div className="App">
      <Header isBingo={isBingo} />
      <Grid isBingo={isBingo} setIsBingo={setIsBingo} />
    </div>
  );
}

export default App;
