import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 8px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20%;
  margin: 8px;
  min-width: 20%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    display:flex;
    justify-content:center;
    background-color: #0d6efd;
    color: white;
    padding: 4px;
    border-radius: 4px;
    margin: 4px;
    width: 30%;
    justify-self: center;
    align-self: center;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
//#0d6efd
export const Title = styled.span`
  display: flex;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: white;
  padding: 4px;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 45px;
`;
export const ItemData = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  padding:8px;
`;
export const ItemImage = styled.img`
  padding: 16px;
  width:100%;
  height:300px;
  @media screen and (max-width: 720px) {
    width:50%;
  }
`;
export const ItemName = styled.span`
color:#B3B3B3;
`;
export const Price = styled.span`
  font-weight: bold;
`;
export const ItemModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    position: relative;
    top: -405px;
    left: 230px;
    z-index: 1;
    color: white;
    padding: 4px;
  }
`;
export const Buttons = styled.div`
display:flex;
justify-content:center;
align-items:center;
button{
  width:40%;
}
`;
export const Desc = styled.span`
width:100%;
height:30px;
overflow:hidden;
`;
