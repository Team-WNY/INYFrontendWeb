import styled from "styled-components";
import {NeedYou} from "../../../data/interface/needYou/needYouInterface";
import logo from "../../../public/static/images/logo/INY.png"
import {useEffect, useState} from "react";

const NeedYouItemWrapper = styled.div`
  width: 360px;
  height: 112px;
  background: var(--color-whiter, #FFF);
`

const NeedYouImg = styled.img<{ needyouimg: string }>`
  width: 90px;
  height: 90px;
  margin: 11px 0 11px 21px;
  border-radius: 5px;
  border: 0.4px solid var(--color-black, #000);
  background: var(--color-whiter, #FFF);
  ${(props) => props.needyouimg ? `background: url(${logo});` : `background: url(${logo});`};
`
// ${({isNormal}) => isNormal ? `background: url(${gisPopupNormalTitleImg});` : `background: url(${gisPopupRouteTitleImg});`}


const NeedYouInfoFrame = styled.div`
  display: flex;
  width: 180px;
  height: 90px;
  margin: 11px 60px 11px 9px;

  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

const NeedYouInfoSubject = styled.div`
  width: 180px;
  height: 16px;
  color: black;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.06px;
`

const NeedYouInfoUploadDtm = styled.div`
  width: 180px;
  height: 14px;
  color: black;
  flex-direction: column;
  justify-content: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.05px;
  text-transform: capitalize;
`

const NeedYouInfoContent = styled.div`
  width: 180px;
  height: 50px;
  color: black;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.05px;
  text-transform: capitalize;
  
  
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`


const NeedYouItem = (props?: { item: NeedYou }) => {

    const [imgSrc, setImgSrc] = useState<string>("")

    return (
        <>
            <NeedYouItemWrapper>
                <div style={{display: "flex"}}>
                    <div>
                        {
                            props.item.needYouImg !== null ?
                                <NeedYouImg src={imgSrc} needyouimg={props.item.needYouImg}
                                            onError={() => setImgSrc("")}/>
                                :
                                null
                        }
                    </div>
                    <NeedYouInfoFrame>
                        <NeedYouInfoSubject>
                            {props.item.subject}
                        </NeedYouInfoSubject>
                        <NeedYouInfoUploadDtm>
                            {props.item.uploadDtm}
                        </NeedYouInfoUploadDtm>
                        <NeedYouInfoContent>
                            {props.item.content}
                        </NeedYouInfoContent>
                    </NeedYouInfoFrame>
                </div>
            </NeedYouItemWrapper>
        </>
    )
}

export default NeedYouItem
