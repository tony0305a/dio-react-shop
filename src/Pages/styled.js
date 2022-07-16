import styled from "styled-components";

export const WrapperContato = styled.div`
display:flex;
flex-direction:column;
margin:8px;
`;
export const WrapperHome = styled.div`
display:flex;
flex-direction:column;
margin:8px;
`;
export const WrapperLogin = styled.div`
display:flex;
flex-direction:column;
margin:8px;
justify-content:center;
align-items:center;

    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:30%;
    }
    input{
        border:1px solid black;
        margin:4px;
        &::placeholder{
            padding:8px;
        }
    }
    button{
        background-color:#0d6efd;
        padding:8px;
        border-radius:4px;
        color:white;
        margin:8px;
    }
`;
export const WrapperCadastro = styled.div`
display:flex;
flex-direction:column;
margin:8px;
`;