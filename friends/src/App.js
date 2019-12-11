import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom'
import { Login } from './components/Login'
import Navigation from './components/Navigation'
import { FriendsList } from './components/FriendsList'
import { AddFriendForm } from './components/AddFriendForm'
import ProtectedRoute from './components/ProtecterRoute'


import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Friends App</h1>
      <Route  path='/' component={Navigation} />
      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/friendslist' component={FriendsList} />
      <ProtectedRoute exact path='/addfriend' component={AddFriendForm} />
    </div>
  );
}

export default App;
