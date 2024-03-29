
import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
cursor: pointer;
span{
  display:flex;
  color:white;
  width:24px;
  height:24px;
  background-color:#0022B5;
  border-radius:100%;
  padding:4px;
  font-size:12px;
  justify-content:center;
  position:relative;
  left:-10px;
  top:-10px;
}
`;

export const CartItem = styled.div`
display:flex;
flex-direction:column;
margin:4px;
`;