import Header from "../main/common/Header";
import Footer from "../main/common/Footer";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../saga/store/rootStore";
import {useEffect} from "react";
import {CurrentPage} from "../../../data/const/commonConst";
import {needYouActions} from "../../saga/action/needYou/needYouActions";
import {NeedYou} from "../../../data/interface/needYou/needYouInterface";
import NeedYouItem from "./NeedYouItem";

const MainWrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-top: 50px;
  //padding-bottom: 40px;
  overflow: auto;
`

const NeedYouMainPage = (props: { currentPage: string }) => {

    const dispatch = useDispatch()
    const needYouList = useSelector((state: RootState) => state.server.needYou.needYouList)

    useEffect(() => {
        if (props.currentPage && props.currentPage === CurrentPage.PAGE_MAIN) {
            console.log("this page is NeedYouMainPage !! ")
            dispatch(needYouActions.requestStatisticsData(props.currentPage))
        }
    }, [props.currentPage])

    useEffect(() => {
        console.log("needYouList ", needYouList)
    }, [needYouList])

    return (
        <>
            <Header/>
            <MainWrapper>
                {
                    needYouList !== null &&
                    //     needYouList.length !== 0 ?
                    needYouList.map((item: NeedYou, index: number) => {

                        return (
                            <NeedYouItem item={item} key={"ITEM_NEED_YOU_" + index}/>
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
            </MainWrapper>
            <Footer/>
        </>
    )
}

export default NeedYouMainPage
