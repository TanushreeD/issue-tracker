import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddIssue from "./components/AddIssue/AddIssue";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";


import { useState } from 'react';

function App() {
  const [addIssue, setAddIssue] = useState(true)
  return (
    <div className='grey-card-container'>
      <div>
        <BrowserRouter>
        <Routes >
           <Route element={<SignUp></SignUp>} path="SignUp" />
           <Route element ={<AddIssue></AddIssue>} path="add"/>
           </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
