import styled from "styled-components";
import {isDev} from "../../../data/config/config";
import imgSrc from "../../../public/static/images/logo/INY.png"
import loginBtnImgSrc from "../../../public/static/images/button/login/btn_login_login.png"

const LoginFrameWrapper = styled.div`
  display: flex;
  width: 257px;
  padding: 50px 60px 304px 60px;
  flex-direction: column;
  align-items: center;
  gap: 65px;
`

const LoginFrame = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  gap: 20px 9px;
  flex-wrap: wrap;
`

const JoinBtn = styled.button`
  width: 75px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--color-74, linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.74) 100%), #70FFFF);
  /* Button/Md */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.06px;
  color: var(--color-black, #000);
  text-align: center;
`

const FindBtn = styled.button`
  width: 89px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--color-74, linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.74) 100%), #70FFFF);
  color: var(--color-black, #000);
  text-align: center;
  /* Button/Md */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.06px;
`

const LoginInput = styled.input`
  width: 159px;
  height: 48px;
  border: 1px solid #000;
  background: var(--color-whiter, #FFF)
`

const StyledImg = styled.img`
  width: 20px;
  height: 10px;
  background-image: ${isDev ? `../../../public/static/images/logo/INY.png` : `../../../public/static/images/logo/INY.png`}
`

const LoginBtn = styled.button`
  display: flex;
  width: 75px;
  height: 75px;
  padding: 27px 11px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--color-74, linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.74) 100%), #70FFFF);
  color: var(--color-black, #000);
  background-image: url('${loginBtnImgSrc}')
`

const LoginPage = (props:{currentPage:string}) => {

    // const [imgSrc, setImgSrc] = useState<string>("")

    const joinClickHandler = () => {
        window.location.href = "/wny/join"
    }

    return (
        <>
            {/*<StyledImg isDev={isDev}></StyledImg>*/}
            <img src={imgSrc} style={{width:"20px", height: "10px", margin:"10px"}}/>
            <LoginFrameWrapper>
                <LoginFrame>
                    <div>
                        <div style={{marginBottom:"9px"}}>
                            ID
                        </div>
                        <LoginInput/>
                    </div>
                    <div>
                        <div style={{marginBottom:"9px"}}>
                            PW
                        </div>
                        <LoginInput/>
                    </div>
                    <LoginBtn/>
                    <div>
                        <JoinBtn style={{marginRight:"9px"}} onClick={() => joinClickHandler()}>회원가입</JoinBtn>
                        <FindBtn>ID/PW 찾기</FindBtn>
                    </div>
                </LoginFrame>
            </LoginFrameWrapper>
        </>
    )
}

export default LoginPage
