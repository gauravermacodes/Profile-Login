import React,{useState} from "react";
import "./App.css";
import LogIn from "./Components/LogIn";
import Card from "./UI/Card";

function App() {
  const [showprofile, setshowprofile] = useState('false')
  return (
    <div className="App">
        <LogIn setshowprofile={setshowprofile} />
    </div>
  );
}

export default App;
