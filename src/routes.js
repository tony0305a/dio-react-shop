import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/home";
import Contato from "./Pages/contato";

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
        </Routes>
    )
}
export default MainRoutes