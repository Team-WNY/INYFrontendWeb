import styled from "styled-components";
import logo from "../../../../public/static/images/logo/INY.png"
import settingsImg from "../../../../public/static/images/button/main/header/btn_main_header_settings.png"


const TopBarWrapper = styled.div`
  width: 100vw;
  height: 40px;
  top: 0;
  flex-shrink: 0;
  position: fixed;
  border-bottom: 0.5px solid #000;
  background: var(--color-whiter, #FFF);
`

const Logo = styled.img`
  width: 20px;
  height: 10px;
  margin: 15px 0 15px 20px;
  flex-shrink: 0;
  background-image: url('${logo}');
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

const Header = () => {

    const logoOnClickHandler = () => {
        console.log("logo clicked !! ")
    }

    const settingOnClickHandler = () => {
        console.log("Settings btn clicked !! ")
    }

    return (
        <>
            <TopBarWrapper>
                <Logo onClick={() => logoOnClickHandler()}/>
                <Settings onClick={() => settingOnClickHandler()}/>
            </TopBarWrapper>
        </>
    )
}

export default Header
