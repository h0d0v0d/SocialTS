import React from 'react';
import { Routes, Route} from "react-router-dom";

import Header from '../Header/Header';
import Sitebar from '../Sitebar/Sitebar';
import Profile from '../Profile/Profile';
import Music from '../Music/Music';
import Messages from '../Messages/Messages';
import News from '../News/News';
import Settings from '../Settings/Settings';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sitebar/>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Profile/>} />
          <Route path='/music' element={<Music/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
