import './App.css'
import { HomePage } from './pages/HomePage'
import { TicTacToe } from './pages/TicTacToe';
import { Weather } from './pages/Weather';
import { TaskManager } from './pages/TaskManager';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

import {Routes, Route, Navigate } from 'react-router';
import { useEffect, useState } from 'react';
import { supabase } from './supabase-client';

function App() {

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSession(){
      const currentSession = await supabase.auth.getSession();
      console.log(currentSession);
      setSession(currentSession.data.session);
      setLoading(false);
    }

    fetchSession();
  }, [])

  if (loading){
    return <div className="loading-screen">Loading...</div>; 
  }

  return (
    <>
      <Routes>
        {/* Protected routes */}
        <Route index element={session ? <HomePage /> : <Navigate to="/signup" replace />}/>
        <Route path='/tic-tac-toe' element={session ? <TicTacToe /> : <Navigate to="/signup" replace />} />
        <Route path='/weather' element={session ? <Weather /> : <Navigate to="/signup" replace />} />
        <Route path='/task-manager' element={session ? <TaskManager /> : <Navigate to="/signup" replace />} />
        {/* Unprotected routes */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </> 
  )
}

export default App
