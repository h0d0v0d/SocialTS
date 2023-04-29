import React from 'react';
import { Routes, Route} from "react-router-dom";


import Sitebar from '../Sitebar/Sitebar';
import Music from '../Music/Music';
import News from '../News/News';
import Settings from '../Settings/Settings';

import { Profile } from '../Profile/Profile';
import { Messages } from '../Messages/Messages';
import {Users} from '../Users/Users';
import { Header } from '../Header/Header';
import { LoginPage } from '../Login/LoginPage';
 
import './App.css';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header/>
      <Sitebar/>
      <div className='main-content'> 
        <Routes>
          <Route path='/' element={<Profile/>} /> 
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/users/:userId' element={<Profile/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/> 
          <Route path='/login' element={<LoginPage/>}/> 
        </Routes>
      </div>
    </div> 
  );
}

export default App;

