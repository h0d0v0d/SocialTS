import React from 'react';
import { Routes, Route} from "react-router-dom";

import Sitebar from '../Sitebar/Sitebar';
import Music from '../Music/Music';
import News from '../News/News';
import Settings from '../Settings/Settings';

import ProfileContainer from '../Profile/ProfileContainer';
import MessagesContainer from '../Messages/MessagesContainer';
import UsersContainer from '../Users/UsersContainer';
import { HeaderContainer } from '../Header/HeaderContainer';
 
import './App.css';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <HeaderContainer/>
      <Sitebar/>
      <div className='main-content'> 
        <Routes>
          <Route path='/' element={<ProfileContainer/>} /> 
          <Route path='/messages' element={<MessagesContainer/>}/>
          <Route path='/users' element={<UsersContainer/>}/>
          <Route path='/users/:userId' element={<ProfileContainer/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/> 
        </Routes>
      </div>
    </div> 
  );
}

export default App;

