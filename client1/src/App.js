import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import ListUser from "./components/ListUser";

const socket = io.connect("http://localhost:3001");

function App() {

  // Actors States
  const [actors, setActors] = useState([]);

  useEffect(() => {
    socket.emit('findAllActors')
  }, []);


  useEffect(() => {
    socket.on("createdActor", (data) => {
      socket.emit('findAllActors')
    });
  }, [socket]);

  useEffect(() => {
    socket.on("findAllActors", (data) => {
      setActors(data);
    });
  }, [socket]);


  return (
    <div className="App">
      <ListUser actors={actors} />
    </div>

  );
}

export default App;
