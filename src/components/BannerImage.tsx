import styled from "styled-components";
import loginImg from "../assets/banner-login.jpg";

export const BannerImage = styled.div`
    background-image: url(${loginImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 50vw;
`;