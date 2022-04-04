import React from 'react';
import styled from 'styled-components';

function Header() {
    const image = localStorage.getItem("image");

    return (
        <Top>
            <h1>TrackIt</h1>
            <img src={`${image}`} alt='foto do usuário' />
        </Top>
    )
}

export default Header;


const Top = styled.div`
    position: fixed;
    top:0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        margin-left: 15px;
        font-family: 'Playball';
        font-weight: 400;
        font-size: 38.982px;
        color: #FFFFFF;
    }

    img {
        margin-right: 20px;
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`
