/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
// import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode=()=>{
    if (mode==='light')
    {
        setMode('dark')
        showAlert("Dark Mode has been Enabled.","success")
    }
    else{
      setMode('light')
      showAlert("Dark Mode has been Disabled","warning");

    }
  }

  const [alert, setAlert] = useState(null);//alert is an object with two attributes :message(string) and type(string)
  const showAlert=(message,new_type)=>{
    setAlert({
      msg:message,
      type:new_type});

      setTimeout(() => {
        setAlert(null);
      },1000);
  }
  return (
    
    <div style={{ backgroundColor: mode === 'dark' ? '#18181b' : 'white' }}>
      <Navbar title="TextUtil App" aboutText="" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
      <TextForm showAlert={showAlert} mode={mode} title="Enter Your Text Here:"/>
      {/* <About/> */}
      </div>
     
      
    </div>
  );
}
export default App;
