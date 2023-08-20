import styled from "styled-components";
import handImg from "../../../../public/static/images/button/main/footer/btn_main_footer_hand.png"
import profileImg from "../../../../public/static/images/button/main/footer/btn_main_footer_profile.png"



const FooterWrapper = styled.div`
  width: 100vw;
  height: 40px;
  position: fixed;
  bottom: 0;
  //transform: translateY(-100%);
  border-top: 0.5px solid #000;
  background: var(--color-whiter, #FFF);
`

const Hand = styled.div`
  width: 18px;
  height: 18px;
  margin: 11px 0 11px 20px;
  position: absolute;
  background-image: url('${handImg}');
  background-size: 100%;
`

const Profile = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 20px;
  top: 11px;  
  background-image: url('${profileImg}');
  background-size: 100%;
`



const Footer = () => {

    const HandOnClickHandler = () => {
        console.log("Hand clicked !! ")
    }

    const ProfileOnClickHandler = () => {
        console.log("Profile btn clicked !! ")
    }

    return (
        <>
            <FooterWrapper>
                <Hand onClick={() => HandOnClickHandler()}/>
                <Profile onClick={() => ProfileOnClickHandler()}/>
            </FooterWrapper>
        </>
    )
}

export default Footer
