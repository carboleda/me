import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: #000000;
    font-weight: 300;
`;

const DivSubStyled = ({ children }) => <StyledDiv>{ children }</StyledDiv>;

export default DivSubStyled;