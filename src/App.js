import React,{useState} from "react";
import "./App.css";
import LogIn from "./Components/LogIn";
import Profile from "./Components/Profile";

function App() {
  const [showprofile, setshowprofile] = useState(true);

  return (
    <div className="App">
        {!showprofile && <LogIn setshowprofile={setshowprofile} />}
        {showprofile && <Profile setshowprofile={setshowprofile}/>}
    </div>
  );
}

export default App;
