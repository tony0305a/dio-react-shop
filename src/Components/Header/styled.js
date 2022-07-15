import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #0d6efd;
  height: 50px;
  width: 100%;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    @media screen and (max-width:600px) {
      justify-content:space-around;

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
  }
  @media screen and (max-width:600px) {
    width:20%;
    align-items:center;
    justify-content:flex-start;
}
`;

export const Search = styled.div`
display:flex;
width:40%;
form{
    width:100%;

    @media screen and (max-width:600px) {
    width:100%;
    margin:4px;
}
}
input{
    flex-grow:2;
    width:100%;
    background-color:#0d8dfd;
    color:white;
    padding:8px;
    border-radius:4px;
    &::placeholder{
        color:lightgray;
    }
}
`;
