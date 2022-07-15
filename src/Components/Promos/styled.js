import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#0D6EFD;
width:100%;
`;
export const Slider = styled.div`
    display:flex;
    height:400px;
    justify-content:center;
`;
export const SlideItem = styled.div`
    height:400px;
    border-radius:8px;
img{
    position:absolute;
    border-radius:8px;
    cursor: pointer;
}
button{
    z-index:1;
    background-color:#0D6EFD;
    padding:8px;
    border-radius:4px;
    position:relative;
    top:70%;;
    left:10%;
    color:white;
}
`;