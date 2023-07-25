import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../saga/store/rootStore";
import {updateBtnNumberActive, updateBtnNumberValue} from "../../saga/store/view/test/testViewStore";
import {unwatchFile} from "fs";
import {useEffect, useState} from "react";
import {updateIsActive} from "../../saga/store/server/test/testServerStore";

const MainRoot = () => {

    const dispatch = useDispatch()
    const btnNumberActive = useSelector((state: RootState) => state.view.test.btnNumberActive as boolean)
    const btnNumberValue = useSelector((state: RootState) => state.view.test.btnNumberValue as number)
    const [btnTitle, setBtnTitle] = useState<string>("btn")

    const clickHandler = (clickCnt:number) => {
        console.log("btn clicked !! ")
        dispatch(updateBtnNumberValue(clickCnt))

        if(clickCnt === 10) {
            dispatch(updateBtnNumberActive(false))
            setBtnTitle("btn broken")
        }
    }

    useEffect(()=> {
        console.log("btnNumberValue " , btnNumberValue)
    },[btnNumberValue])

    return (
        <>
            <div>
                <h1>hello world !!</h1>
                <h1/>
                <button style={{right:"0", height: "100px", width:"100px"}}
                        onClick={(e) => clickHandler(btnNumberValue + 1)}
                        disabled={!btnNumberActive}
                >
                    {btnTitle} {btnNumberValue}
                </button>
                <div style={{right:"0", width:"100px", height:"100px", backgroundColor:"saddlebrown", fontSize:"large"}}>{btnNumberValue}</div>
            </div>
        </>
    )
}

export default MainRoot
