import "./App.css";
import { useEffect } from "react";
import Header from "./components/header/Header";
import { useTelegram } from "./hooks/useTelegram";
import Button from "./components/button/Button";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/form/Form";
import { Route, Routes } from "react-router-dom";

function App() {
    const { onToggleButton, tg } = useTelegram();
    useEffect(() => {
        tg.ready();
    });

    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route index element={<ProductList />}></Route>
                <Route path={"form"} element={<Form />}></Route>
            </Routes>

            <Button
                onClick={() => {
                    onToggleButton();
                }}
            >
                Toggle
            </Button>
        </div>
    );
}

export default App;
