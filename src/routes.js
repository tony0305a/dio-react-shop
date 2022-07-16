import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/home";
import Contato from "./Pages/contato";
import Login from "./Pages/login";
import Cadastro from "./Pages/cadastro";

const MainRoutes = () =>{
    return(
        <Routes>
            <Route
            path="/"
            element={<Home/>}
            />
            <Route 
            path="/contato"
            element={<Contato/>}
            />
            <Route 
            path="/login"
            element={<Login/>}
            />
            <Route 
            path="/registro"
            element={<Cadastro/>}
            />
        </Routes>
    )
}
export default MainRoutes