import imgSrc from "../../../public/static/images/logo/INY.png";
import styled from "styled-components";
import joinDuplicatesBtnImgSrc from "../../../public/static/images/button/join/btn_join_duplicates_check.png"
import joinBtnImgSrc from "../../../public/static/images/button/join/btn_join_join.png"
import joinCancelBtnImgSrc from "../../../public/static/images/button/join/btn_join_cancel.png"
import joinCertifiedBtnImgSrc from "../../../public/static/images/button/join/btn_join_certified.png"
import {useDispatch} from "react-redux";
import CommonModal from "../modal/CommonModal";
import React from "react";
import {updateCommonModalStatus} from "../../saga/store/view/modal/modalViewStore";
import {CommonModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {ModalConst} from "../../../data/const/modalConst";

const JoinFrameWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 20px 60px 99px 60px;
  align-items: flex-start;
  gap: 36px;
`

const JoinTextBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  color: #000;
  /* Head/Header */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
  text-transform: uppercase;

  &::before {
    color: #000;
    /* Head/Header */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.08px;
    text-transform: uppercase;
    content: "회원가입 하기";
  }
`

const JoinFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 257px;
  height: 500px;
  gap: 9px;
`

const JoinInput = styled.input`
  width: 159px;
  height: 48px;
  //border: 1px solid #000;
  background: var(--color-whiter, #FFF)
`

const DuplicatesCheckBtn = styled.button`
  display: flex;
  width: 75px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-image: url('${joinDuplicatesBtnImgSrc}');
`
const CertifiedBtn = styled.button`
  display: flex;
  width: 75px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-image: url('${joinCertifiedBtnImgSrc}');
`

const JoinBtn = styled.button`
  display: flex;
  width: 75px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-image: url("${joinBtnImgSrc}");
`
const CancelBtn = styled.button`
  display: flex;
  width: 75px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-image: url("${joinCancelBtnImgSrc}");
`

const JoinPage = (props:{currentPage:string}) => {

    const dispatch = useDispatch()

    const duplicatesCheck = () => {

    }

    const cancelClick = () => {
        console.log("cancel btn clicked !! ")
        const btn :string = "cancel"
        const payload: CommonModalInterface = {
            title: ModalConst[props.currentPage][btn].title,
            content: ModalConst[props.currentPage][btn].content,
            isConfirmMsg: ModalConst[props.currentPage][btn].isConfirmMsg,
            isOpen: true,
            currentPage: props.currentPage,
        }
        dispatch(updateCommonModalStatus(payload))
    }

    return (
        <>
            <CommonModal currentPage={props.currentPage}/>
            <img src={imgSrc} style={{width: "20px", height: "10px", margin: "10px"}}/>
            <JoinTextBox/>
            <JoinFrameWrapper>
                <JoinFrame>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            ID
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}>
                            <JoinInput/>
                            <DuplicatesCheckBtn onClick={() => duplicatesCheck()}/>
                        </div>
                    </div>

                    <div>
                        <div style={{marginBottom: "9px"}}>
                            비밀번호
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            비밀번호 확인
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            이메일
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput/>
                            <CertifiedBtn/>
                        </div>
                    </div>
                    <div style={{
                        marginTop:"36px",
                        display: "flex",
                        gap:"107px"
                    }}>
                        <JoinBtn/>
                        <CancelBtn onClick={cancelClick}/>
                    </div>
                </JoinFrame>
            </JoinFrameWrapper>
        </>
    )
}
export default JoinPage
