import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import UserManager from './components/UserManager';
import AddIssue1 from './components/AddIssue/AddIssue1';
import IssueManager from './components/AddIssue/IssueManager';

function App() {
  
  return (
    <div className='grey-card-container'>
      <div>
        <BrowserRouter>
        <Header></Header>
        <Routes >
        <Route element ={<Home></Home>} path="/"/>
           <Route element={<SignUp></SignUp>} path="SignUp" />
           <Route element={<AddIssue1/>} path="add" />
           <Route element={<Login />} path="login" />
           {/* <Route element ={<AddIssue></AddIssue>} path="add"/> */}
           <Route element ={<UserManager/>} path="usermanager"/>
           <Route element ={<IssueManager/>} path="issuemanager"/>
           </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
