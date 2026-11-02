import './App.css'
import { HomePage } from './pages/HomePage'
import { TicTacToe } from './pages/TicTacToe';
import { Weather } from './pages/Weather';
import { TaskManager } from './pages/TaskManager';

import {Routes, Route} from 'react-router';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/tic-tac-toe' element={<TicTacToe/>} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/task-manager' element={<TaskManager />} />
      </Routes>
    </> 
  )
}

export default App
