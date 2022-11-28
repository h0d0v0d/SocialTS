import React from 'react';
import { Routes, Route} from "react-router-dom";

import Header from '../Header/Header';
import Sitebar from '../Sitebar/Sitebar';
import Music from '../Music/Music';
import News from '../News/News';
import Settings from '../Settings/Settings';

import ProfileContainer from '../Containers/ProfileContainer';
import MessagesContainer from '../Containers/MessagesContainer';
 
import './App.css';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header/> 
      <Sitebar/>
      <div className='main-content'> 
        <Routes>
          <Route path='/' element={<ProfileContainer/>} /> 
          <Route path='/music' element={<Music/>}/>
          <Route path='/messages' element={<MessagesContainer/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/settings' element={<Settings/>}/> v 
        </Routes>
      </div>
    </div> 
  );
}

export default App;

