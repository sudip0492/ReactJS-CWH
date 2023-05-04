/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
// import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode=()=>{
    if (mode==='light')
        setMode('dark')
    else
      setMode('light')
  }
  return (
    <div style={{ backgroundColor: mode === 'dark' ? '#18181b' : 'white' }}>
      <Navbar title="TextUtil App" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm mode={mode} title="Enter Your Text Here:"/>
      {/* <About/> */}
      </div>
     
      
    </div>
  );
}
export default App;
