import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from '../pages/Home'

export default function RouterSettings(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}