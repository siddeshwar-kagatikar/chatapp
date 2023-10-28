import './App.css';
import Client from './components/Client'; 
import RoomState from './context/RoomState'; 

function App() {
  return (
    <div className="App">
      <RoomState>
        <Client/>
      </RoomState>
    </div>
  );
}

export default App;
