import React,{ useContext } from 'react';
import TokenContext from '../Contexts/TokenContext';
import styled from 'styled-components';

function Header() {
    const { loginData } = useContext(TokenContext);

    return (
        <Headline>
            <h1>TrackIt</h1>
            <img src={`${loginData.image}`} alt='foto do usuário' />
        </Headline>
    )
}

export default Header;


const Headline = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        margin-left: 5%;
        font-family: 'Playball';
        font-weight: 400;
        font-size: 38.982px;
        color: #FFFFFF;
    }

    img {
        margin-right: 7%;
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`
