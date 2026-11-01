import './App.css'
import { HomePage } from './pages/HomePage'
import { TicTacToe } from './pages/TicTacToe';
import { Weather } from './pages/Weather';
import {Routes, Route} from 'react-router';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/tic-tac-toe' element={<TicTacToe/>} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </> 
  )
}

export default App
