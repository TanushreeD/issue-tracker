import './App.css';
import AddIssue from "./components/AddIssue/AddIssue";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";


import { useState } from 'react';

function App() {
  const [addIssue, setAddIssue] = useState(true)
  return (
    <div className='grey-card-container'>
      {addIssue ? <AddIssue/>: <CurrentIssue/>}
      <div>
        <button className='mt-3 Add_button'>Current Issue</button>
        <button className='mt-3 view_button' >Add Issue</button>
      </div>
      
    </div>
  );
}

export default App;
