import styled from "styled-components";

export const WrapperContato = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
export const WrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
  }
  input {
    border: 1px solid black;
    margin: 4px;
    &::placeholder {
      padding: 8px;
    }
  }
  button {
    background-color: #0d6efd;
    padding: 8px;
    border-radius: 4px;
    color: white;
    margin: 8px;
  }
`;
export const WrapperCadastro = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
export const WrapperCart = styled.div`
display:flex;
flex-direction:column;
margin:8px;
`;
export const CartBody = styled.div`
display:flex;
`;
export const CartItemArea = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height:700px;
width:50%;
overflow:scroll;
&::-webkit-scrollbar{
    display:none;
}

`;
export const CartItem = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
#title{
    display:flex;
    width:100%;
    background-color:#0d6efd;
    color:white;
    justify-content:center;
    align-items:center;
    border-top-left-radius:4px;
    border-top-right-radius:4px;
}
#image{
    display:flex;
    margin:4px;
    border-radius:40%;
}
#close{
    position:relative;
    z-index:1;
    left:50px;
    top:6%;
    left:46%;
    color:#dc3545;
}
`;
export const CartPayoutArea = styled.div`
display:flex;
flex-direction:column;

margin:8px;
width:50%;

`;

