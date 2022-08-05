import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  height: 85px;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  @media screen and (max-width: 720px) {
    justify-content: space-between;
  }
`;
export const Line = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 40px;
  align-items: center;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-weight: bold;
    color: black;
    align-items: center;
  }
  #cep {
    display: flex;
    align-items: center;
    width: 130px;
    span {
      font-size: 12px;
    }
  }
  ul {
    display: flex;
    margin-left: 48px;
    li {
      display: flex;
      align-items: center;
      a {
        width: 139px;
        height: 30px;
        color: black;
        font-weight: bold;
        margin: 4px;
      }
      .trend {
        color: black;
        background: #ffffff;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        box-shadow: inset 0 0 0 0 #ffffff;
        -webkit-transition: all 0.3 ease 0s;
        -moz-transition: all 0.3 ease 0s;
        transition: all 0.3 ease 0s;
        &:hover {
          background: #92b4ec;
          color: black;
        }
      }
    }
  }
`;
export const Buttons = styled.div`
  display: flex;
  width: 163px;
  justify-content: flex-start;
  button {
    color: black;
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
    background-color: #92b4ec;
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
    height: 40px;
    color: black;
    padding: 8px;
    &::placeholder {
      color: black;
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
    color: black;
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