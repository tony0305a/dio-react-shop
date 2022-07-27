import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 8px;
  width:100%;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px) {
        width:720px;
    }

`;
export const OuterDiv = styled.div`
display:flex;
flex-direction:column;
`;
export const InnerDiv = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;

`;
export const Item = styled.div`
  display: flex;
  min-width: 20%;
  margin:8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: column;
  justify-self: flex-start;
  align-items: center;
  height:490px;

  button {
    display: flex;
    justify-content: center;
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
        margin:4px;
        width:35%;
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
  padding: 8px;
`;
export const ItemImage = styled.img`
  padding: 16px;
  width: 100%;
  height: 300px;
  &:hover{
    transition: transform .2s;
    transform: scale(1.15);
    border-radius:8px;

  }
`;
export const ItemImageModal = styled.img`
  padding: 16px;
  width: 100%;
  height: 300px;
`;
export const ModalProductImages = styled.div`
display:flex;
img{
  margin:4px;
  cursor:pointer;
}
`;
export const ModalSizes = styled.div`
display:flex;
button{
  margin:8px;
}
`;
export const ItemName = styled.span`
  display: flex;
  color: #b3b3b3;
  width: 100%;
  @media screen and (max-width: 720px) {
    height:50px;
    overflow: hidden;
  }
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

  #close {
    position: relative;
    top: -40px;
    left: 230px;
    z-index: 1;
    color: white;
    padding: 4px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 40%;
  }
  @media screen and (max-width: 720px) {
    button {
      font-size: 12px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const ButtonsModal = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 8px;
  button {
    display: flex;
    padding: 8px;
    background-color: #0d6efd;
    color: white;
    border-radius: 4px;
    margin: 8px;
  }
  span {
    margin: 16px;
  }
`;
export const Desc = styled.span`
  width: 100%;
  height: 30px;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    height: 70px;
  }
`;
export const PaginationWrapper = styled.div`
display:flex;
justify-content:center;
margin:8px;
align-items:center;
button{
  margin:4px;
  padding:8px;
  background-color:#0d6efd;
  color: white;
  border-radius:4px;
}
`;
