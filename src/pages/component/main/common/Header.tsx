import styled from "styled-components";
import logo from "../../../../public/static/images/logo/INY.png"
import settingsImg from "../../../../public/static/images/button/main/header/btn_main_header_settings.png"
import backImg from "../../../../public/static/images/button/main/header/btn_main_header_back.png"
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateNeedYouSelect} from "../../../saga/store/server/needYou/needYouServerStore";
import {useNavigate} from "react-router";

const TopBarWrapper = styled.div`
  width: 100vw;
  height: 40px;
  top: 0;
  flex-shrink: 0;
  z-index: 100;
  position: fixed;
  border-bottom: 0.5px solid #000;
  background: var(--color-whiter, #FFF);
`

const Logo = styled.img`
  width: 20px;
  height: 10px;
  margin: 15px 0 15px 20px;
  flex-shrink: 0;
  background-size: 100%;
`

const Settings = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  float: right;
  margin: 10px 20px 10px 0;
  background-image: url('${settingsImg}');
  background-size: 100%;
`

const Header = (props: { isShowNeedYouList: boolean, setIsShowNeedYouList:Function }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isShowLogo, setIsShowLogo] = useState<boolean>(true)
    const [logoImgStyle, setLogoImgStyle] = useState<any>({backgroundImage: `${logo}`})

    const logoOnClickHandler = () => {
        console.log("logo clicked !! ")
        if(!isShowLogo) {
            // 뒤로가기 버튼 클릭시
            props.setIsShowNeedYouList(true)
            dispatch(updateNeedYouSelect(null)) // 선택 아이템 초기화
        }
    }

//     const settingOnClickHandler = () => {
//         console.log("Settings btn clicked !! ")
//     }

    useEffect(() => {
        if (props.isShowNeedYouList) {
            setIsShowLogo(true)
        } else {
            setIsShowLogo(false)
        }
    }, [props.isShowNeedYouList])

    useEffect(() => {
        if (isShowLogo) {
            setLogoImgStyle({backgroundImage: `url(${logo})`})
        } else {
            setLogoImgStyle({width: "18.29px", height: "18.5px", backgroundImage: `url(${backImg})`})
        }
    }, [isShowLogo])

    useEffect(() => {
        console.log("logoImgStyle ", logoImgStyle)
    }, [logoImgStyle])

    return (
        <>
            <TopBarWrapper>
                <Logo onClick={() => logoOnClickHandler()} style={logoImgStyle}/>
                <Settings onClick={() => navigate("/settings")}/>
            </TopBarWrapper>
        </>
    )
}

export default Header
