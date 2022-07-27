import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/home";
import Contato from "./Pages/contato";
import Login from "./Pages/login";
import Cadastro from "./Pages/cadastro";
import Cart from "./Pages/cart";
import Details from "./Components/Details";

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
            <Route 
            path="/carrinho"
            element={<Cart/>}
            />
            <Route
            path="/produtos/:id"
            element={<Details/>}
            />
        </Routes>
    )
}
export default MainRoutes