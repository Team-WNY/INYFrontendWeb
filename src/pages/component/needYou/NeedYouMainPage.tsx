import Header from "../main/common/Header";
import Footer from "../main/common/Footer";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../saga/store/rootStore";
import {useEffect, useState} from "react";
import {CurrentPage} from "../../../data/const/commonConst";
import {needYouActions} from "../../saga/action/needYou/needYouActions";
import {Comment, NeedYou} from "../../../data/interface/needYou/needYouInterface";
import NeedYouItem from "./NeedYouItem";
import cancelImg from "../../../public/static/images/button/main/register/btn_main_register_cancel.png";
import logoImg from "../../../public/static/images/logo/INY.png";
import sampleImg from "../../../public/static/images/sample/sampleImg.png";
import RegisterModal from "../modal/registerModal/RegisterModal";
import {updateCommonModalStatus, updateRegModalStatus} from "../../saga/store/view/modal/modalViewStore";
import {CommonModalInterface, RegModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {updateNeedYouSelect} from "../../saga/store/server/needYou/needYouServerStore";
import {ModalConst} from "../../../data/const/modalConst";
import CommonModal from "../modal/CommonModal";
import {UserInfo} from "../../../data/interface/user/userInterface";
import {useLocation, useNavigate} from "react-router";

const MainWrapper = styled.div`
  height: auto;
  min-height: 100%;
  //padding-top: 50px;

  //padding-bottom: 40px;
  overflow: auto;
  //background-color: red;
  transition: all 0.2s ease-in-out;

`

const RegisterBtn = styled.button`
  width: 60px;
  height: 36px;
  position: fixed;
  right: 0;
  bottom: 54px;
  margin-right: 20px;
  flex-shrink: 0;
  border-radius: 50px;
  z-index: 10;
  background: var(--color-74, linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.74) 100%), #70FFFF);

  /* shadow */
  box-shadow: 5px 4px 5px -3px rgba(0, 0, 0, 0.25);
  animation: all 0.2s ease-out;
  transition: all 0.2s ease-out;

  &::before {
    color: #000;
    text-align: center;

    /* Button/Md */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.06px;
    content: "글쓰기";
  }
`

const RegisterOptionFrame = styled.div`
  width: 75px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: fixed;
  right: 0;
  margin-right: 25px;
  bottom: 100px;
  z-index: 10;
  border-radius: 7px;
`

const RegisterOption = styled.button`
  width: 75px;
  height: 30px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  text-align: center;
  align-items: center;
  position: fixed;
  right: 0;
  margin-right: 25px;
  background-color: #fff;
  z-index: 10;
  border-radius: 7px;
  animation: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &::before {
    color: #000;
    text-align: center;

    /* Button/Md */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    //letter-spacing: 0.06px;
`
// ${(props) => props.title && `content: ${props.title}`}

const RegisterCloseBtn = styled.button`
  width: 30px;
  height: 30px;
  position: fixed;
  right: 0;
  margin-right: 25px;
  bottom: 60px;
  /* shadow */
  box-shadow: 5px 4px 5px -3px rgba(0, 0, 0, 0.25);
  z-index: 10;
  fill: var(--color-whiter, #FFF);
  background-image: url("${cancelImg}");
  animation: all 0.8s ease-out;
  transition: all 0.8s ease-in-out;
`

const NeedYouSelectFrame = styled.div`
  width: 100vw;
  height: 1110px;
  background: var(--color-whiter, #FFF);
`

const NeedYouItemImg = styled.div<{ itemImg?: string }>`
  width: 100vw; // 360px
  //width: 360px;

  height: 320px;
  flex-shrink: 0;
  //position: fixed;

  display: flex;
  position: relative;
  top: 40px;
  ${(props) => !props.itemImg ? `background-image: url(${props.itemImg})` : `background-image: url(${sampleImg})`};
  background-repeat: no-repeat;
  display: block;
  text-align: center;
  justify-content: center;
  //background-color: skyblue;
  background-size: 100%;
`

// ${(props) => props.itemImg && `background-size: 100%`};

const UploadUserFrame = styled.div`
  width: 100%;
  height: 61px;
  top: 40px;
  display: flex;
  position: relative;
  background-color: #FFF;
  border-bottom: 5px solid rgba(0, 0, 0, 0.11);
`

const UploadUserImgBox = styled.div<{ itemImg?: string }>`
  width: 45px;
  height: 49.018px;
  margin-top: 6px;
  margin-left: 21px;
  display: block;
  position: relative;
  border-radius: 5px;
  border: 0.4px solid var(--color-black, #000);
  background: var(--color-whiter, #FFF);
  ${(props) => props.itemImg && `background-image: url(${props.itemImg})`};
  background-repeat: no-repeat;
`

const UploadUserInfoArea = styled.div<{ itemImg?: string }>`
  width: 121px;
  height: 31px;
  margin: 12px 9px 18px 9px;
  display: inline-flex;
  height: 31px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

const UploadUserNickName = styled.div`
  display: flex;
  height: 15px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-self: stretch;
  color: var(--color-black, #000);

  /* Body/Header */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.06px;
  text-transform: capitalize;
`

const NeedYouSelectInfoArea = styled.div`
  width: 318px;
  height: auto;
  display: block;
  margin-top: 30px;
  margin-left: 21px;
  margin-bottom: 300px;
  //background-color: skyblue;
`

const NeedYouSelectInfoTitle = styled.div`
  display: flex;
  width: 318px;
  height: 19px;
  padding: 14px 1px;
  margin-top: 60px;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  background: var(--color-whiter, #FFF);
`

const NeedYouSelectInfoUploadTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0px;
  color: rgba(0, 0, 0, 0.34);

  /* Head/body */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.06px;
  text-transform: uppercase;
  gap: 15px;
`

const NeedYouSelectInfoContent = styled.div`
  display: flex;
  width: 317px;
  height: 168px;
  align-items: flex-start;
  resize: none;
  gap: 10px;
  color: var(--color-black, #000);
  border: 1px solid #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  background: var(--color-whiter, #FFF);

  /* Head/body */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.06px;
  text-transform: uppercase;
`

const NeedYouSelectInfoAddress = styled.div`
  display: flex;
  width: 318px;
  height: 47px;
  margin-top: 15px;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  background: var(--color-whiter, #FFF);
`

const NeedYouSelectCommentFrame = styled.div`
  display: flex;
  width: 317px;
  align-items: center;
  margin-top: 15px;
  gap: 10px;
  //border: 1px solid #000;
  background: var(--color-whiter, #FFF);
`

const NeedYouSelectHelpComment = styled.div`
  width: 317px;
  height: 47px;
  color: var(--color-black, #000);
  border: 1px solid #000;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 10px;
  /* Head/Header */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
  text-transform: uppercase;
`

const NeedYouSelectHelpCommentInput = styled.input`
  width: 317px;
  height: 47px;
  color: var(--color-black, #000);
  position: relative;
  display: flex;
  align-items: center;
  /* Head/Header */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
  text-transform: uppercase;
`

const NeedYouSelectHelpYesBtn = styled.button`
  width: 60px;
  height: 36px;
  margin: 6px 5px 5px 0;
  border-radius: 20px;
  background: var(--color-74, linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.74) 100%), #70FFFF);
  position: relative;
  right: 0;
`

const HelperRegisterCommentYesBtn = styled.button`
  width: 60px;
  height: 36px;
  margin: 6px 0 5px 0;
  border-radius: 20px;
  background: var(--color-74, linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.74) 100%), #70FFFF);
  position: relative;
  right: 0;
`

const NeedYouMainPage = (props: { currentPage: string }) => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const needYouList = useSelector((state: RootState) => state.server.needYou.needYouList)
    const needYouSelect = useSelector((state: RootState) => state.server.needYou.needYouSelect as NeedYou)

    const userInfo: UserInfo = useSelector((state: RootState) => state.server.user.userInfo)

    const [isRegister, setIsRegister] = useState<boolean>(false)
    const [isShowNeedYouList, setIsShowNeedYouList] = useState<boolean>(true)
    const [isHelperRegisterComment, setIsHelperRegisterComment] = useState<boolean>(false)
    const [helperRegisterCommentStr, setHelperRegisterCommentStr] = useState<string>("")
    // const [helperRegisterComment, setHelperRegisterComment] = useState<HelperRegisterComment>({
    //     isShowCommentYesBtn: false,
    //     helperComment: ""
    // })
    const [mainWrapperStyle, setMainWrapperStyle] = useState<any>({paddingTop: "50px"})

    useEffect(() => {
        console.log("state", location.state)
    }, [location])

    useEffect(() => {
        if (props.currentPage && props.currentPage === CurrentPage.PAGE_MAIN) {
            console.log("this page is NeedYouMainPage !! ")
            dispatch(needYouActions.requestNeedYouList(props.currentPage))
        }
    }, [props.currentPage])

    const RegisterBtnClick = () => {
        console.log("clicked !! ", isRegister)
        setIsRegister(!isRegister)
    }

    const RegisterCloseBtnClick = () => {
        console.log("RegisterCloseBtn clicked !! ", isRegister)
        setIsRegister(false)
    }

    useEffect(() => {
        // if (props.currentPage === "main" && !localStorage.getItem("Authorization")) {
        //     const subPage = "error"
        //     const payload: CommonModalInterface = {
        //         title: ModalConst[props.currentPage][subPage].title,
        //         content: ModalConst[props.currentPage][subPage].content,
        //         isOpen: true,
        //         currentPage: props.currentPage,
        //         subPage: subPage,
        //     }
        //     dispatch(updateCommonModalStatus(payload))
        //     setTimeout(() => {
        //         dispatch(updateCommonModalStatus({isOpen:false}))
        //         navigate("/login", {replace: true})
        //     }, 3000)
        // }
    }, [props.currentPage])


    const calBottomSize = (indexNum: number) => {
        const resStr: string = 100 + (indexNum * 30) + "px"
        return resStr
    }

    const optionClick = (e) => {
        console.log("e ", e)
        const optionValue = e.target.value

        let payload: RegModalInterface = {
            isOpen: true,
        }

        if (optionValue!! === "needYou") {
            payload = {
                ...payload,
                title: "HELP"
            }
        } else {
            payload = {
                ...payload,
                title: "AM I"
            }
        }
        dispatch(updateRegModalStatus(payload))
    }

    const needYouItemClick = (item: NeedYou) => {
        setIsShowNeedYouList(false)
        dispatch(updateNeedYouSelect(item))
    }

    useEffect(() => {
        if (isShowNeedYouList) {
            setMainWrapperStyle({paddingTop: "50px"})
        } else {
            setMainWrapperStyle({paddingTop: "0px"})
        }
    }, [isShowNeedYouList])

    const helpYesBtnClick = (item: Comment) => {
        console.log("props.currentPage  ", props.currentPage)
        const subPgae: string = "call"
        const payload: CommonModalInterface = {
            title: ModalConst[props.currentPage][subPgae].title,
            content: ModalConst[props.currentPage][subPgae].content,
            isConfirmMsg: ModalConst[props.currentPage][subPgae].isConfirmMsg,
            isOpen: true,
            currentPage: props.currentPage,
            subPage: subPgae
        }
        dispatch(updateCommonModalStatus(payload))
    }

    useEffect(() => {
        console.log("isHelperRegisterComment ", isHelperRegisterComment)
    }, [isHelperRegisterComment])

    const typingChk = (e) => {
        if (e.target.value.length > 0) {
            setIsHelperRegisterComment(true)
        } else {
            setIsHelperRegisterComment(false)
        }
    }

    const helperCommentYesBtnClick = () => {
        const value = "register"
        const payload: CommonModalInterface = {
            title: ModalConst[props.currentPage][value].title,
            content: ModalConst[props.currentPage][value].content,
            isConfirmMsg: ModalConst[props.currentPage][value]?.isConfirmMsg,
            isOpen: true,
            currentPage: props.currentPage,
            subPage: value
        }
        dispatch(updateCommonModalStatus(payload))
    }

    return (
        <>
            <CommonModal currentPage={props.currentPage}/>
            <Header isShowNeedYouList={isShowNeedYouList}
                    setIsShowNeedYouList={setIsShowNeedYouList}
                    setIsHelperRegisterComment={setIsHelperRegisterComment}
            />
            <RegisterModal currentPage={props.currentPage}/>
            <MainWrapper style={mainWrapperStyle}>
                {/*needYouList*/}
                {
                    needYouList !== null &&
                    //     needYouList.length !== 0 ?
                    needYouList.map((item: NeedYou, index: number) => {
                        return (
                            <div onClick={() => needYouItemClick(item)}
                                 style={{display: `${isShowNeedYouList ? 'block' : 'none'}`}}>
                                <NeedYouItem item={item} key={"ITEM_NEED_YOU_" + index}/>
                            </div>
                        )
                    })

                    //     :
                    //     // 조건에 해당하는 결과가 없을때
                    //     <>
                    //
                    //     </>
                    // :
                    // // 서버 측에 문제가 생겨서 reload 를 시키거나 재검색을 시킬때
                    // <>
                    //
                    // </>
                }

                {/*needYouSelect*/}
                {
                    needYouSelect &&
                    <>
                        <NeedYouSelectFrame>
                            <NeedYouItemImg itemImg={needYouSelect?.needYouImg}/>
                            <UploadUserFrame>
                                <UploadUserImgBox>
                                    <img src={logoImg}
                                         style={{
                                             width: "20px",
                                             height: "10px",
                                             display: "flex",
                                             alignItems: "center",
                                             justifyContent: "center"
                                         }}/>
                                </UploadUserImgBox>
                                <UploadUserInfoArea>
                                    <UploadUserNickName>
                                        {needYouSelect?.userInfo?.profile?.nickName}
                                    </UploadUserNickName>
                                    <UploadUserNickName>
                                        {needYouSelect?.userInfo?.profile?.nickName}
                                    </UploadUserNickName>
                                </UploadUserInfoArea>
                            </UploadUserFrame>

                            <NeedYouSelectInfoArea>
                                {/*제목*/}
                                <NeedYouSelectInfoTitle>
                                    {needYouSelect.subject}
                                </NeedYouSelectInfoTitle>

                                {/*/!*업로드 시간*!/*/}
                                <NeedYouSelectInfoUploadTime>
                                    업로드 시간 : {needYouSelect.uploadDtm}
                                </NeedYouSelectInfoUploadTime>

                                {/*/!*내용*!/*/}
                                <NeedYouSelectInfoContent>
                                    {needYouSelect.content}
                                </NeedYouSelectInfoContent>

                                {/*/!*주소*!/*/}
                                <NeedYouSelectInfoAddress>
                                    {needYouSelect.address}
                                </NeedYouSelectInfoAddress>

                                {/*/!*댓글*!/*/}
                                {
                                    needYouSelect.comment && needYouSelect.comment.length > 0 ?
                                        needYouSelect.comment.map((item: Comment) => {
                                            return (
                                                <NeedYouSelectCommentFrame>
                                                    <NeedYouSelectHelpComment>{item.comment}</NeedYouSelectHelpComment>
                                                    <NeedYouSelectHelpYesBtn
                                                        onClick={() => helpYesBtnClick(item)}>YES</NeedYouSelectHelpYesBtn>
                                                </NeedYouSelectCommentFrame>
                                            )
                                        })
                                        :
                                        <>
                                            <NeedYouSelectCommentFrame>
                                                <NeedYouSelectHelpCommentInput placeholder={"아직 작성된 도움 댓글이 없습니다!"}
                                                                               onKeyUp={(e) => typingChk(e)}
                                                                               onBlur={(e)=> setHelperRegisterCommentStr(e.target.value)}
                                                />
                                                {
                                                    isHelperRegisterComment &&
                                                    <HelperRegisterCommentYesBtn
                                                        onClick={() => helperCommentYesBtnClick()}>YES</HelperRegisterCommentYesBtn>
                                                }
                                            </NeedYouSelectCommentFrame>
                                        </>
                                }
                                {/*<NeedYouSelectInfoComment>*/}

                                {/*</NeedYouSelectInfoComment>*/}


                            </NeedYouSelectInfoArea>
                        </NeedYouSelectFrame>
                    </>
                }


                {/*글쓰기*/}
                {
                    isRegister ?
                        <>
                            <RegisterOptionFrame>
                                <RegisterOption style={{bottom: calBottomSize(1)}}
                                                value={"needYou"}
                                                onClick={(e) => optionClick(e)}
                                >need you</RegisterOption>

                                <RegisterOption style={{bottom: calBottomSize(0)}}
                                                value={"amI"}
                                                onClick={(e) => optionClick(e)}
                                >am I</RegisterOption>
                            </RegisterOptionFrame>
                            <RegisterCloseBtn onClick={() => RegisterCloseBtnClick()}/>
                        </>
                        :
                        <RegisterBtn onClick={() => RegisterBtnClick()}/>
                }
            </MainWrapper>
            <Footer/>
        </>
    )
}

export default NeedYouMainPage
