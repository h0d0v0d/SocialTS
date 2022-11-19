import React, { useEffect } from 'react';
import { Routes, Route} from "react-router-dom";

import Header from '../Header/Header';
import Sitebar from '../Sitebar/Sitebar';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import Music from '../Music/Music';
import News from '../News/News';
import Settings from '../Settings/Settings';
 
import './App.css';

import {DataType} from '../../redux/store'

type appPropsType = {
  state: any
  dispatch: any
}

function App(props: appPropsType) {

  console.log(props.state)

  return (
    <div className="App">
      <Header/>
      <Sitebar/>
      <div className='main-content'>
        <Routes>
          <Route path='/' 
                 element={<Profile postData={props.state.profilePage.postsData} 
                                   user={props.state.user}
                                   dispatch={props.dispatch}
                                   postText={props.state.profilePage.postText}/>} />
          <Route path='/music' element={<Music/>}/>
          <Route path='/messages' 
                 element={<Messages messagesData={props.state.messagesPage.messagesData} 
                                    dispatch={props.dispatch}
                                    newMessageText={props.state.messagesPage.newMessageText}/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/settings' element={<Settings/>}/> 
        </Routes>
      </div>
    </div> 
  );
}

export default App;

