import {useState} from 'react';
import Header from './components/Header';
import Grid from  './components/Grid'
import './App.css';

function App() {

  const [isBingo, setIsBingo] = useState(false);
  const [bingoCount, setBingoCount] = useState(0);

  return (
    <div className="App">
      <Header isBingo={isBingo} bingoCount={bingoCount} />
      <Grid isBingo={isBingo} setIsBingo={setIsBingo} bingoCount={bingoCount} setBingoCount={setBingoCount} />
    </div>
  );
}

export default App;
