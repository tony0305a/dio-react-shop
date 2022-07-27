import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #0d6efd;
  height: 80px;
  width: 100%;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    @media screen and (max-width: 720px) {
    justify-content:space-between;
  }
`;
export const Buttons = styled.div`
  display: flex;
  width: 20%;
  margin: 8px;
  justify-content: space-around;
  button {
    color: white;
    padding: 8px;
    border-radius: 4px;
    &:hover{
    font-size:18px;
  }
  }
  @media screen and (max-width: 600px) {
    width: 20%;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Search = styled.div`
  display: flex;
  width: 40%;
  form {
    width: 100%;

    @media screen and (max-width: 600px) {
      width: 100%;
      margin: 4px;
    }
  }
  input {
    flex-grow: 2;
    width: 100%;
    background-color: #0d8dfd;
    color: white;
    padding: 8px;
    border-radius: 4px;
    &::placeholder {
      color: lightgray;
    }
  }
`;
export const Login = styled.div`
display:flex;
margin:8px;
align-items:center;
button{
  margin:4px;
  color:white;
  &:hover{
    font-size:18px;
  }
}
`;
export const Cart = styled.div`
display:flex;
span{
  display:flex;
  color:white;
  width:24px;
  height:24px;
  background-color:#6CC947;
  border-radius:100%;
  padding:4px;
  font-size:12px;
  justify-content:center;
  position:relative;
  left:-10px;
  top:10px;
  &:hover{
    font-size:24px;
    width:48px;
    height:48px;
  }
}
`;
