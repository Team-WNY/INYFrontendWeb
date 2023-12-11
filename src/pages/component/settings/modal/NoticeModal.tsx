import styled, {css, keyframes} from "styled-components";
import React, {useEffect, useState} from "react";
import {CurrentPage} from "../../../../data/const/commonConst";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../saga/store/rootStore";
import {SettingsModalInterface} from "../../../../data/interface/modal/commonModalInterface";
import {noticeActions} from "../../../saga/action/settings/noticeActions";
import {Notice} from "../../../../data/interface/settings/settingsInterface";
import {updateNoticeSelect} from "../../../saga/store/server/settings/settingsServerStore";
import {updateSettingsModalStatus} from "../../../saga/store/view/modal/modalViewStore";

const NoticeModal = (props:{currentPage:string}) => {

     const dispatch = useDispatch();
     const settingsModalStatus: SettingsModalInterface = useSelector((state: RootState) => state.view.modal.settingsModalStatus)
     const noticeList = useSelector((state: RootState) => state.server.settings.noticeList)
     const noticeSelect = useSelector((state: RootState) => state.server.settings.noticeSelect as Notice)

     const [isInit, setIsInit] = useState<boolean>(false)
     const [isShow, setIsShow] = useState<boolean>(false)

     useEffect(() => {
            if (settingsModalStatus.title === "NOTICE") {
                setIsInit(true)
                setIsShow(true)
            }else {
                setIsInit(false)
            }
        }, [settingsModalStatus.title])

      useEffect(() => {
        if (props.currentPage && props.currentPage === CurrentPage.PAGE_SETTINGS) {
            console.log("this page is NoticePage !! ")
            dispatch(noticeActions.requestNoticeList(props.currentPage))
        }
      }, [props.currentPage])

      const noticeItemClick = (item: Notice) => {
        let payload: SettingsModalInterface = {
          isOpen: true,
        }
        payload = {
          ...payload,
          title: "NOTICE",
          isShowNotice: true
        }
        dispatch(updateSettingsModalStatus(payload))
        dispatch(updateNoticeSelect(item))
      }

     return(
        <>
          {/*공지사항 리스트*/}
          {
              isInit &&
              <>
                  <NoticeModalWrapper isVisible={isShow}>
                      {
                        noticeList !== null &&
                        noticeList.map((item: Notice, index: number) => {
                          return (
                            <NoticeList key={"ITEM_NOTICE_" + index} onClick={() => noticeItemClick(item)}>
                              <NoticeListSubject>{item.subject}</NoticeListSubject>
                              <NoticeListUploadDtm>{item.uploadDtm}</NoticeListUploadDtm>
                            </NoticeList>
                          )
                        })
                      }
                  </NoticeModalWrapper>
              </>
          }

          {/*공지사항 세부 내용*/}
          {
              noticeSelect &&
              <>
                  <NoticeSelectWrapper isVisible={settingsModalStatus.isShowNotice}>
                    <NoticeSelectSubject>{noticeSelect.subject}</NoticeSelectSubject>
                    <NoticeSelectUploadDtm>업로드 시간 : {noticeSelect.uploadDtm}</NoticeSelectUploadDtm>
                    <NoticeSelectContent>{noticeSelect.content}</NoticeSelectContent>
                  </NoticeSelectWrapper>
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

const NoticeSelectWrapper = styled.div<{ isVisible: boolean }>`
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

const NoticeListSubject = styled.div`
  font-size: 13px;
  font-weight: 600;
`

const NoticeListUploadDtm = styled.div`
  font-size: 11px;
  margin-top: 8px;
  font-weight: 600;
  color: #A4A4A4;
`

const NoticeSelectSubject = styled.div`
  width: 330px;
  height: 15px;
  border: 1px solid #000;
  padding: 15px 0;
  margin: 30px 20px 20px;
  font-weight: 650;
`

const NoticeSelectUploadDtm = styled.div`
  font-size: 13px;
  margin: 0 20px;
  font-weight: 600;
  color: #A4A4A4;
`

const NoticeSelectContent = styled.div`
  width: 330px;
  height: 180px;
  border: 1px solid #000;
  margin: 20px;
  font-size: 13.5px;
  text-transform: capitalize;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`

NoticeModalWrapper.defaultProps = {
    isVisible: false
}

NoticeSelectWrapper.defaultProps = {
  isVisible: false
}