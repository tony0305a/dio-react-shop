import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
margin:8px;
hr{
    width:100%;
}
`;
export const Product = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
width:50%;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Display = styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-direction:column;

#main{
    display:flex;
    justify-self:center;
    align-self: center;
}


`;
export const Gallery = styled.div`
display:flex;
width:100%;
justify-content:space-evenly;
margin:8px;
img{
    &:hover{
    transition: transform .2s;
    transform: scale(1.15);
    border-radius:8px;

  }
}
`;

export const Infos = styled.div`
display:flex;
width:50%;
flex-direction:column;
align-items:flex-start;
h2{
    font-weight:bold;
    font-size:24px;
    margin:8px;
}
h3{
    font-size:16px;
    height:40px;
    margin:8px;
}
button{
    margin:4px;
}

`;
export const Payment = styled.div`
display:flex;
width:20%;
#title{
    display:flex;
    color:white;
    align-items:center;
    justify-content:center;

}
margin-inline:16px;
flex-direction:column;
justify-content:flex-start;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Values = styled.div`
display:flex;
flex-direction:column;
margin:8px;

#price{
    font-weight:bold;
    font-size:32px;
}
#paymentDisc{
    height:100px;
    overflow:hidden;
}
`;