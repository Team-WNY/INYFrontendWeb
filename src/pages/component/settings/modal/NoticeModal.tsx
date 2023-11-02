import styled, {css, keyframes} from "styled-components";
import React, {useEffect, useState} from "react";
import {CurrentPage} from "../../../../data/const/commonConst";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../saga/store/rootStore";
import {SettingsModalInterface} from "../../../../data/interface/modal/commonModalInterface";
import {settingsActions} from "../../../saga/action/settings/settingsActions";
import {Notice} from "../../../../data/interface/settings/settingsInterface";

const NoticeModal = (props:{currentPage:string}) => {

     const dispatch = useDispatch();
     const settingsModalStatus: SettingsModalInterface = useSelector((state: RootState) => state.view.modal.settingsModalStatus)
     const noticeList = useSelector((state: RootState) => state.server.settings.noticeList)

     const [isInit, setIsInit] = useState<boolean>(false)
     const [isShow, setIsShow] = useState<boolean>(false)

     useEffect(() => {
            if (settingsModalStatus.title === "NOTICE") {
                setIsInit(true)
                setIsShow(true)
            } else {
                setIsInit(false)
            }
        }, [settingsModalStatus.title])

      useEffect(() => {
        console.log("noticeList",noticeList)

      }, [noticeList])

      useEffect(() => {
        if (props.currentPage && props.currentPage === CurrentPage.PAGE_SETTINGS) {
            console.log("this page is NoticePage !! ")
            dispatch(settingsActions.requestNoticeList(props.currentPage))
        }
      }, [props.currentPage])

     return(
        <>
            {
                isInit &&
                <>
                    <NoticeModalWrapper isVisible={isShow}>
                        {
                          noticeList !== null &&
                          noticeList.map((item: Notice, index: number) => {
                            return (
                              <NoticeList key={"ITEM_NOTICE_" + index}>
                                <NoticeSubject>{item.subject}</NoticeSubject>
                                <NoticeUploadDtm>{item.uploadDtm}</NoticeUploadDtm>
                              </NoticeList>
                            )
                          })
                        }
                    </NoticeModalWrapper>
                </>
            }
        </>
     )
}

export default NoticeModal

const fadeIn = keyframes`
  0% {
    opacity: 0;
    left: 100%;
  }
  100% {
    opacity: 1;
    left: 0%;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
    left: 0%;
  }
  100% {
    opacity: 0;
    left: 100%;
  }
`

const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`

const NoticeModalWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  min-height: 100%;
  margin: 60px 0;
  background-color: white;
  ${(props) => modalSettings(props.isVisible)}
`

const NoticeList = styled.div`
  width: 100%;
  height: 25px;
  flex-direction: column;
  padding: 20px 30px;
  background-color: white;
  border-bottom: 2px solid;
  border-color: #E5E5E5;
`

const NoticeSubject = styled.div`
  font-size: 13px;
  font-weight: 600;
`

const NoticeUploadDtm = styled.div`
  font-size: 11px;
  margin-top: 8px;
  font-weight: 600;
  color: #A4A4A4;
`

NoticeModalWrapper.defaultProps = {
    isVisible: false
}