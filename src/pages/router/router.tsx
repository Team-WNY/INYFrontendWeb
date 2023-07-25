import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import MainRoot from "../component/main/mainRoot";


const Router: React.FC = () => {
    return (
        <BrowserRouter basename={"/wny"}>
            <Routes>
                <Route path="/main" element={<MainRoot/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
