import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddIssue from "./components/AddIssue/AddIssue";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";


import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [addIssue, setAddIssue] = useState(true)
  return (
    <div className='grey-card-container'>
      <div>
        <BrowserRouter>
        <Routes >
           <Route element={<SignUp></SignUp>} path="SignUp" />
           <Route element={<Login />} path="login" />
           <Route element ={<AddIssue></AddIssue>} path="add"/>
           <Route element ={<Home></Home>} path="home"/>
           </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
