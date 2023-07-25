import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../saga/store/rootStore";
import {updateBtnNumberActive, updateBtnNumberValue} from "../../saga/store/view/test/testViewStore";
import {unwatchFile} from "fs";
import {useEffect, useState} from "react";

const MainRoot = () => {

    const dispatch = useDispatch()
    const btnNumberActive = useSelector((state: RootState) => state.view.test.btnNumberActive as boolean)
    const btnNumberValue = useSelector((state: RootState) => state.view.test.btnNumberValue as number)
    const [btnValue, setBtnValue] = useState<number>(0)

    const clickHandler = (e) => {
        console.log("btn clicked !! ")
        dispatch(updateBtnNumberActive(btnNumberActive))
    }

    return (
        <>
            <div>
                <h1>hello world !!</h1>
                <h1/>
                <button style={{right:"0", height: "100px", width:"100px"}}
                        onClick={(e) => clickHandler(e)}
                        disabled={btnNumberActive}
                >
                    Button {}
                </button>
                <div style={{right:"0", width:"100px", height:"100px", backgroundColor:"saddlebrown", fontSize:"large"}}>{btnValue}</div>
            </div>
        </>
    )
}

export default MainRoot
