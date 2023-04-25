import React from "react";
import styled from 'styled-components/macro';

const StyledButton = styled.div`
display: flex;
width: 83px;
height: 40px;
background: #6750A4;
border-radius: 100px;
align-items: center;
justify-content:center;
padding: 5px 10px;
cursor:pointer;

&:hover {
    background-color:green;
}
`
const Title = styled.p`
margin: 0;
font-size: 20px;
color: white;
`


export const Button = ({ title, startBtn, restartBtn, onClick }) => {
    
return (
    <StyledButton onClick={onClick}>
        {title && <Title>{title}</Title> }
    </StyledButton>
)
    
}