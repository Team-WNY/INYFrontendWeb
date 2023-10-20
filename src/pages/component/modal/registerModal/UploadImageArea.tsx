import uploadImg from "../../../../public/static/images/button/modal/register/btn_modal_register_uploadImg.png";
import React from "react";
import styled from "styled-components";

const uploadImageArea = () => {

    return (
        <>
            <UploadImgArea>
                <label htmlFor="ex_file"/>
                <input
                    type="file"
                    id="ex_file"
                    multiple={true}
                    accept="image/jpg, image/png, image/jpeg"
                    onChange={(e) => console.log(e.target.files[0])}
                    onClick={() => console.log("test !! ")}
                />
            </UploadImgArea>
            <UploadImageSlideListArea>
                <div>
                    {/*{ */}
                    {/*    // 이미지 슬라이드가 올려지는 영역*/}
                    {/*}*/}
                </div>
            </UploadImageSlideListArea>

            {/*<Swiper*/}
            {/*    // install Swiper modules*/}
            {/*    cssMode={true}*/}
            {/*    navigation={true}*/}
            {/*    pagination={true}*/}
            {/*    mousewheel={true}*/}
            {/*    keyboard={true}*/}
            {/*    modules={[Navigation, Pagination, Mousewheel, Keyboard ]}*/}
            {/*    className="mySwiper"*/}


            {/*    // modules={[Navigation,*/}
            {/*    //     // Pagination, Scrollbar, A11y*/}
            {/*    // ]}*/}
            {/*    // spaceBetween={50}*/}
            {/*    // slidesPerView={3}*/}
            {/*    // navigation*/}
            {/*    // pagination={{ clickable: true }}*/}
            {/*    // scrollbar={{ draggable: true }}*/}
            {/*    // onSwiper={(swiper) => console.log(swiper)}*/}
            {/*    // onSlideChange={() => console.log('slide change')}*/}
            {/*>*/}
            {/*    <SlideImage>Slide 1</SlideImage>*/}
            {/*    <SlideImage>Slide 2</SlideImage>*/}
            {/*    <SlideImage>Slide 3</SlideImage>*/}
            {/*</Swiper>*/}
        </>
    )
}
export default uploadImageArea

const UploadImageSlideListArea = styled.div`
  width: 272px;
  height: 49px;
  top: 75px;
  padding-bottom: 0px;
  margin-left: 67px;
  background-color: #8D929DFF;
  position: absolute;

  &:after {
    content: "test22"
  }
`

const UploadImgArea = styled.div`
  top: 75px;
  display: flex;
  width: 45px;
  height: 49px;
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
