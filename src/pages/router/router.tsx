import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../saga/store/rootStore";
import {UserInfo} from "../../data/interface/user/userInterface";
import {isDev} from "../../data/config/config";
import LoginPage from "../component/login/LoginPage";
import JoinPage from "../component/join/JoinPage";
import NeedYouMainPage from "../component/needYou/NeedYouMainPage";

const Router: React.FC = () => {

    const userInfo: UserInfo = useSelector((state: RootState) => state.server.user.userInfo)

    useEffect(() => {
        console.log("userInfo", userInfo)
    }, [userInfo])

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
            </Routes>
        </BrowserRouter>
    )
}

export default Router
