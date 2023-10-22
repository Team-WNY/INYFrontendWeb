import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {isDev} from "../../data/config/config";
import LoginPage from "../component/login/LoginPage";
import JoinPage from "../component/join/JoinPage";
import NeedYouMainPage from "../component/needYou/NeedYouMainPage";
import SettingsPage from "../component/settings/SettingsPage";

const Router: React.FC = () => {

    return (
        <BrowserRouter basename={"/wny"}>
            <Routes>
                {
                    isDev &&
                    <Route path="/login" element={<LoginPage currentPage={"login"}/>}/>
                }
                {
                    isDev &&
                    <Route path="/join" element={<JoinPage currentPage={"join"}/>}/>
                }
                {
                    isDev &&
                    <Route path="/main" element={<NeedYouMainPage currentPage={"main"}/>}/>
                }
                {
                    isDev &&
                    <Route path="/settings" element={<SettingsPage currentPage={"settings"}/>}/>
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Router
