import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './HOC/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import Playlist from './containers/Playlist/Playlist';
import Search from './containers/Search/Search';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';

function App() {
  return (
    <div className="text-zinc-600">
        <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/playlist/:id/:slug' element={<Playlist />} />
              <Route path='/search/*' element={<Search />} />
              <Route path='/register/' element={<Register />} />
              <Route path='/login/' element={<Login />} />
              <Route path='/profile/:id/' element={<Profile />} />
            </Routes>
        </Layout>
    </div>
  );
}

export default App;
