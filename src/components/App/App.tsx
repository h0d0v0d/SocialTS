import React from 'react';
import { Routes, Route} from "react-router-dom";

import Header from '../Header/Header';
import Sitebar from '../Sitebar/Sitebar';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import Music from '../Music/Music';
import News from '../News/News';
import Settings from '../Settings/Settings';
 
import './App.css';

import {StoreType} from '../../redux/store'

type appPropsType = {
  store: StoreType
}

function App(props: appPropsType) {
  return (
    <div className="App">
      <Header/>
      <Sitebar/>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Profile postData={props.store._state.postData} 
                                            user={props.store._state.user}
                                            dispatch={props.store.dispatch}/>} />
          <Route path='/music' element={<Music/>}/>
          <Route path='/messages' element={<Messages messagesData={props.store._state.messagesData}/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

