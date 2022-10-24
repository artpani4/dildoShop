import './App.css';
import {useEffect} from "react";
import Header from "./components/header/Header";
import {useTelegram} from "./hooks/useTelegram";


function App() {
const {onToggleButton, tg } = useTelegram()
    useEffect(()=>{
        tg.ready()
    }, [])

  return (
    <div className="App">
        <Header></Header>
        <Button onClick={onToggleButton}>Toggle </Button>
    </div>
  );
}

export default App;
