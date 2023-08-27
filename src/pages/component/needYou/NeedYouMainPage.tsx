import Header from "../main/common/Header";
import Footer from "../main/common/Footer";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../saga/store/rootStore";
import {useEffect, useState} from "react";
import {CurrentPage} from "../../../data/const/commonConst";
import {needYouActions} from "../../saga/action/needYou/needYouActions";
import {NeedYou} from "../../../data/interface/needYou/needYouInterface";
import NeedYouItem from "./NeedYouItem";
import cancelImg from "../../../public/static/images/button/main/register/btn_main_register_cancel.png";
import RegisterModal from "../modal/RegisterModal";
import {updateRegModalStatus} from "../../saga/store/view/modal/modalViewStore";
import {RegModalInterface} from "../../../data/interface/modal/commonModalInterface";

const MainWrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-top: 50px;
  //padding-bottom: 40px;
  overflow: auto;
  //background-color: red;
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
  animation: all 0.3s ease-out;
  transition: all 0.3s ease-out;

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
  animation: all 0.3s ease-out;
  transition: all 0.3s ease-out;

`

const NeedYouMainPage = (props: { currentPage: string }) => {

    const dispatch = useDispatch()
    const needYouList = useSelector((state: RootState) => state.server.needYou.needYouList)
    const [isRegister, setIsRegister] = useState<boolean>(false)
    const [isShowNeedYouList, setIsShowNeedYouList] = useState<boolean>(true)

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

    const calBottomSize = (indexNum: number) => {
        const resStr: string = 100 + (indexNum * 30) + "px"
        return resStr
    }

    const optionClick = (e) => {
        const optionValue = e.target.value
        let payload: RegModalInterface = {
            isOpen: true
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
        console.log("item ", item)
        setIsShowNeedYouList(false)
    }

    return (
        <>
            <Header isShowNeedYouList={isShowNeedYouList} setIsShowNeedYouList={setIsShowNeedYouList}/>
            <RegisterModal currentPage={props.currentPage}/>
            <MainWrapper>

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

                {/*needYouItem*/}
                {

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
