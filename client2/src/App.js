import './App.css';
import { useState } from 'react'
import io from "socket.io-client";
 
const socket = io.connect("http://localhost:3001");

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log( { firstName, lastName });
    socket.emit("createActor", { firstName, lastName });
    setFirstName('');
    setLastName('');
    alert('Created actor sucessfully!!!')
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div>
          <input name="firstName" onChange={(e)=>{setFirstName(e.target.value)}} value = {firstName}/>
        </div>
        <div>
          <input name="lastName" onChange={(e)=>{setLastName(e.target.value)}} value = {lastName}/>
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
