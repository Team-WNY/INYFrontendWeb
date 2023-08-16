import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../saga/store/rootStore";
import {UserInfo} from "../../data/interface/user/userInterface";
import TestPage from "../component/login/TestPage";
import HomePage from "../component/home/HomePage";
import {isDev} from "../../data/config/config";
import LoginPage from "../component/login/LoginPage";


const Router: React.FC = () => {

    const userInfo: UserInfo = useSelector((state: RootState) => state.server.user.userInfo)

    useEffect(() => {
        console.log("userInfo", userInfo)
    }, [userInfo])

    return (
        <BrowserRouter basename={"/wny"}>
            <Routes>
                <Route path={"/home"} element={<HomePage/>}/>

                {
                    isDev &&
                    <Route path="/test" element={<TestPage/>}/>
                }
                {
                    isDev &&
                    <Route path="/login" element={<LoginPage/>}/>
                }

            </Routes>
        </BrowserRouter>
    )
}

export default Router
