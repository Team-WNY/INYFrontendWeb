import uploadImg from "../../../../public/static/images/button/modal/register/btn_modal_register_uploadImg.png";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";

const UploadImageArea = () => {

    const [fileList, setFileList] = useState<any>(null)
    const [thumbnailList, setThumbnailList] = useState<Array<string>>([])

    const uploadImg = (e) => {
        const payload = e.target.files
        const newList = [...payload]
        const testList = []
        newList.forEach(file => testList.push(URL.createObjectURL(file)))
        console.log("newList ", newList)
        console.log("testList ", testList)

        const formData = new FormData();
        newList.forEach(file => {
            formData.append("file", file);
        })
        // formData.append("fileName", JSON.stringify(new))

        console.log("formData ", formData)
        setFileList(formData)
        setThumbnailList(testList)
    }

    useEffect(() => {
        console.log("fileList ", fileList)
    }, [fileList])

    useEffect(() => {
        console.log("thumbnailList ", thumbnailList)
    }, [thumbnailList])

    return (
        <>
            <UploadImgArea>
                <label htmlFor="ex_file"/>
                <input
                    type="file"
                    id="ex_file"
                    multiple={true}
                    defaultValue={fileList}
                    accept="image/jpg, image/png, image/jpeg"
                    onChange={(e) => uploadImg(e)}
                    onClick={() => console.log("camera btn clicked !! ")}
                />
            </UploadImgArea>
            <UploadImageSlideListArea>
                <div>
                    {/*이미지 슬라이드가 올려지는 영역*/}
                    {
                        thumbnailList.map((thumbnail, index) => {
                            return (
                                <ImgBox src={thumbnail}/>
                            )
                        })
                    }
                </div>
            </UploadImageSlideListArea>
        </>
    )
}
export default UploadImageArea

const UploadImageSlideListArea = styled.div`
  display: flex;
  width: 272px;
  height: 45px;
  top: 75px;
  padding-bottom: 0px;
  margin-left: 70px;
  
  position: absolute;
  overflow-x: auto;
  overflow-y: hidden;
  white-space:nowrap;
`

const UploadImgArea = styled.div`
  top: 75px;
  display: flex;
  width: 45px;
  height: 45px;
  gap: 10px;
  position: absolute;
  margin-left: 20px;
  border-radius: 5px;
  border: 0.4px solid var(--color-black, #000);
  background: #fff;

  label {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 10px;
    bottom: 10.5px;
    background-image: url(${uploadImg});
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`

const ImgBox = styled.img`
  width: 42px;
  height: 45px;
  margin: 2px;
  border: 1px solid var(--color-74, #70FFFF);
  background: #D9D9D9;
`
