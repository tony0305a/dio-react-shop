import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
justify-content:center;
width:100%;
margin:8px;
`;
export const Slider = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
`;
export const SlideItem = styled.div`
    display:flex;
    height:315px;
    width:100%;
    border-radius:8px;
    img{
        display:flex;
        margin:8px;
        align-self:center;
        justify-self:center;
    }

button{
    position:relative;
    z-index:1;
    background-color:#0D6EFD;
    padding:8px;
    border-radius:4px;
    top:70%;;
    left:10%;
    color:white;
}
`;