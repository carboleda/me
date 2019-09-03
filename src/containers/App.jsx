import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
`;

const LoadingStyled = styled.h1`
    text-align: center;
    color: #1b4e96;
`;

const App = () => {
    const data = useGetData();
    return data.length == 0 ? <LoadingStyled>Cargando...</LoadingStyled> : (
        <Main>
            <GlobalStyle />
            <Sidebar>
                <About
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social={data.social} />
            </Sidebar>
            <Info>
                <Education data={data.education} />
                <Experience data={data.experience} />
                <Certificates data={data.certificate} />
                <Skills data={data.skills} />
            </Info>
        </Main>
    );
}

export default App;