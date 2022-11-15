import React from 'react';
import { Routes, Route} from "react-router-dom";

import Header from '../Header/Header';
import Sitebar from '../Sitebar/Sitebar';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import Music from '../Music/Music';
import News from '../News/News';
import Settings from '../Settings/Settings';

import { png } from '../Profile/Profile';
import './App.css';

export type PostItemType = {
  id: number, 
  userText: string,
}

export type MessageItemType = {
  id: number
  status: number,
  src: string,
  messageText: string
}

export type MessagesDataItemType = {
  id: number,
  name: string,
  message: Array<MessageItemType>
}

type DataType = {
  postData: Array<PostItemType>
  messagesData: Array<MessagesDataItemType>
}


const data: DataType = {
  postData: [
    {id: 1, userText: 'Это мой первый пост'},
    {id: 2, userText: 'Это мой второй пост'},
    {id: 3, userText: 'Это мой третий пост'},
  ],
  messagesData: [
    {
      id: 1, 
      name: 'Friend 1', 
      message: [
        {id: 1, status: 1, src: png, messageText: 'Привет'}, 
        {id: 2, status: 0, src: png, messageText: 'Привет'}
      ]
    },
    {
      id: 2, 
      name: 'Friend 2', 
      message: [
        {id: 1, status: 1, src: png, messageText: 'Приветт'}, 
        {id: 2, status: 0, src: png, messageText: 'Приветт'}
      ]
    },
    {
      id: 3, 
      name: 'Friend 3', 
      message: [
        {id: 1, status: 1, src: png, messageText: 'Приветтт'}, 
        {id: 2, status: 0, src: png, messageText: 'Приветтт'}
      ]
    },
  ]
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Sitebar/>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Profile postData={data.postData}/>} />
          <Route path='/music' element={<Music/>}/>
          <Route path='/messages' element={<Messages messagesData={data.messagesData}/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

