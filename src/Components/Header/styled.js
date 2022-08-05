import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #0d6efd;
  flex-direction:column;
  height: 160px;
  width: 100%;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  @media screen and (max-width: 720px) {
    justify-content: space-between;
  }
`;
export const Line = styled.div`
display:flex;
width:100%;
align-items:center;
margin-top:32px;
`;
export const Nav = styled.div`
span{
  font-weight:bold;
  color:white;
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
    &:hover {
      font-size: 18px;
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
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 8px;

    img {
      margin-inline: 8px;
    }

    @media screen and (max-width: 600px) {
      width: 100%;
      margin: 4px;
    }
  }
  input {
    flex-grow: 2;
    width: 100%;
    height:40px;
    color: white;
    padding: 8px;
    &::placeholder {
      color: #75758b;
    }
  }
`;
export const Login = styled.div`
  display: flex;
  margin: 8px;
  align-items: center;
  span {
    display: flex;
    width: 120px;
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
  img {
    margin-inline: 12px;
  }
  button {
    display: none;
    margin: 4px;
    color: white;
    &:hover {
      font-size: 18px;
    }
  }
`;
export const Cart = styled.div`
  display: flex;
  span {
    display: flex;
    color: white;
    width: 24px;
    height: 24px;
    background-color: #0022b5;
    border-radius: 100%;
    padding: 4px;
    font-size: 12px;
    justify-content: center;
    position: relative;
    left: -10px;
    top: -10px;
    &:hover {
      font-size: 16px;
      width: 32px;
      height: 32px;
    }
  }
`;
