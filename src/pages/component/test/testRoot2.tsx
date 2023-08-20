import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../saga/store/rootStore";
import {updateBtnNumberActive, updateBtnNumberValue} from "../../saga/store/view/test/testViewStore";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const TestRoot2 = (props:{stringType:string}) => {

    const dispatch = useDispatch()
    const btnNumberActive = useSelector((state: RootState) => state.view.test.btnNumberActive as boolean)
    const btnNumberValue = useSelector((state: RootState) => state.view.test.btnNumberValue as number)
    const [btnTitle, setBtnTitle] = useState<string>("btn")

    const clickHandler = (clickCnt:number) => {
        console.log("main btn clicked !! ")
        dispatch(updateBtnNumberValue(clickCnt))

        if(clickCnt === 10) {
            dispatch(updateBtnNumberActive(false))
            setBtnTitle("btn broken")
        }
    }

    useEffect(()=> {
        console.log("main btnNumberValue " , btnNumberValue)
    },[btnNumberValue])

    const tempStyle = {
        width: "100%",
        height: "100%",
        maxWidth: "1920px",
        maxHeight: "1032px",
        margin: "0 auto",
        top: "48px",
        Position: 'fixed',
    }

    const hanler = () => {
        console.log("")
    }
    return (
        <>
            <div style={tempStyle}>
                <h1>{btnTitle}</h1>
                <button style={{right:"0", height: "100px", width:"100px"}}
                        onClick={(e) => clickHandler(btnNumberValue + 1)}
                        disabled={!btnNumberActive}
                >
                    {btnTitle} {btnNumberValue}
                </button>
                <button>
                    <Link to={"/test"}>main</Link>
                </button>
                <div style={{right:"0", width:"100px", height:"100px", backgroundColor:"saddlebrown", fontSize:"large"}}>{btnNumberValue}</div>
                <input onKeyUp={() => hanler()}/>
            </div>
        </>
    )
}

export default TestRoot2
