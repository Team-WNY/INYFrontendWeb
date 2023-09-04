import imgSrc from "../../../public/static/images/logo/INY.png";
import styled from "styled-components";
import joinDuplicatesBtnImgSrc from "../../../public/static/images/button/join/btn_join_duplicates_check.png"
import joinBtnImgSrc from "../../../public/static/images/button/join/btn_join_join.png"
import joinCancelBtnImgSrc from "../../../public/static/images/button/join/btn_join_cancel.png"
import joinCertifiedBtnImgSrc from "../../../public/static/images/button/join/btn_join_certified.png"
import {useDispatch, useSelector} from "react-redux";
import CommonModal from "../modal/CommonModal";
import React, {useEffect, useRef, useState} from "react";
import {updateCommonModalStatus} from "../../saga/store/view/modal/modalViewStore";
import {CommonModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {ModalConst} from "../../../data/const/modalConst";
import {UserInfo} from "../../../data/interface/user/userInterface";
import {joinActions} from "../../saga/action/join/joinActions";
import {RootState} from "../../saga/store/rootStore";

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


const JoinPage = (props: { currentPage: string }) => {

    const dispatch = useDispatch()
    const [userIdValue, setUserIdValue] = useState<any>("")
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState<any>('');
    const [name, setName] = useState('');
    const [nick, setNick] = useState('');
    const [birth, setBirth] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [add_detail, setAdd_detail] = useState('');
    const [count, setCount] = useState(0);
    const passwordRef = useRef('');
    const isAccountIdDupCheck = useSelector((state: RootState) => state.server.join.isAccountIdDupCheck);
    // useDispatch()
    // useState() // 해당 컴포넌트 내에서 상태값 핸들링할때 주로 쓰임
    // useEffect(()=> {
    //
    // },[])

    const duplicatesCheck = () => {
        console.log("clicked !! ")
        if (userIdValue.length === 0)
            console.log('아이디를 입력해 주세요');
        else if (userIdValue.length <= 8)
            dispatch(joinActions.requestAccountIdDupChk(userIdValue));
        // const payload:UserInfo = {
        // }
    }

    const valiToJoin = () => {
        const vali_param = {
            userIdValue: userIdValue,
            password: password,
            password2: password2,
            email: email,
            name: name,
            nick: nick,
            birth: birth,
            mobile: mobile,
            address: address,
            add_detail: add_detail
        }
        setCount(10);
        for (const key in vali_param) {
            if (vali_param.hasOwnProperty(key)) {
                const value = vali_param[key];
                if (!value || value.trim() === '') {
                    setCount(count - 1);
                    console.log(`${key} 항목을 입력해 주세요`);
                }
            }
        }
        if (count === 10) {
            console.log('전 항목 입력완료');
        }
    }

    const typing = (e) => {
        const value = e.target.value
        setUserIdValue(value);
    }
    const pwType1 = (e) => {
        const pw1 = e.target.value;
        setPassword(pw1);
        passwordRef.current = pw1;
    };
    const pwType2 = (e) => {
        const pw2 = e.target.value;
        setPassword2(pw2);

        if (passwordRef.current === pw2) {
            console.log('비밀번호가 일치합니다');
        } else {
            console.log('비밀번호가 일치하지 않습니다');
        }
    };

    const userName = (e) => {
        const name = e.target.value;
        setName(name);
    };
    const userEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const userNick = (e) => {
        const nick = e.target.value;
        setNick(nick);

    };
    const userBirth = (e) => {
        const birth = e.target.value;
        setBirth(birth);
    };
    const userMobile = (e) => {
        const mobile = e.target.value;
        setMobile(mobile);
    };
    const userAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
    };
    const addressDetail = (e) => {
        const add_Detail = e.target.value;
        setAdd_detail(add_Detail);
    };

    useEffect(() => {
        console.log("user", userIdValue)
    }, [userIdValue])

    useEffect(() => {
        console.log("join", isAccountIdDupCheck)
        let subPage: string = ""
        if (isAccountIdDupCheck !== null) {
            if (isAccountIdDupCheck) {
                subPage = "duplicatesCheck_true"
            } else {
                subPage = "duplicatesCheck_false"
            }
            const payload: CommonModalInterface = {
                title: ModalConst[props.currentPage][subPage].title,
                content: ModalConst[props.currentPage][subPage].content,
                isConfirmMsg: ModalConst[props.currentPage][subPage]?.isConfirmMsg,
                isOpen: true,
                currentPage: props.currentPage,
                subPage: subPage,
            }
            dispatch(updateCommonModalStatus(payload))
        }
    }, [isAccountIdDupCheck])

    const cancelClick = () => {
        console.log("cancel btn clicked !! ")
        const subPage: string = "cancel"
        const payload: CommonModalInterface = {
            title: ModalConst[props.currentPage][subPage].title,
            content: ModalConst[props.currentPage][subPage].content,
            isConfirmMsg: ModalConst[props.currentPage][subPage].isConfirmMsg,
            isOpen: true,
            currentPage: props.currentPage,
            subPage: subPage
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
                            <JoinInput onBlur={(e) => typing(e)}/>
                            <DuplicatesCheckBtn onClick={() => duplicatesCheck()}/>
                        </div>
                    </div>

                    <div>
                        <div style={{marginBottom: "9px"}}>
                            비밀번호
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}>
                            <JoinInput type="password" onBlur={pwType1}/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            비밀번호 확인
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput type="password" onBlur={pwType2}/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            이메일
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput type="userName" onBlur={userEmail}/>
                            <CertifiedBtn/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            이름
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput type="userName" onBlur={userName}/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            닉네임
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput type="userNick" onBlur={userNick}/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            생년월일
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput type="userBirth" onBlur={userBirth}/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            연락처
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput type="userMobile" onBlur={userMobile}/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            주소
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput type="userAddress" onBlur={userAddress}/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: "9px"}}>
                            상세 주소
                        </div>
                        <div
                            style={{display: "flex", alignItems: "flex-end", gap: "23px",}}
                        >
                            <JoinInput type="addressDetail" onBlur={addressDetail}/>
                        </div>
                    </div>
                    <div style={{
                        marginTop: "36px",
                        display: "flex",
                        gap: "107px"
                    }}>
                        <JoinBtn onClick={valiToJoin}/>
                        <CancelBtn onClick={cancelClick}/>
                    </div>
                </JoinFrame>
            </JoinFrameWrapper>
        </>
    )
}
export default JoinPage
