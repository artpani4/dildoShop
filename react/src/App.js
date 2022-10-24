import './App.css';
import {useEffect} from "react";
import Header from "./components/header/Header";
const tg = window.Telegram.WebApp


function App() {

    useEffect(()=>{
        tg.ready()
    }, [])

  return (
    <div className="App">
        <Header></Header>
    </div>
  );
}

export default App;
