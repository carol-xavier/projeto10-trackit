import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
    const image = localStorage.getItem("image");
    const navigate = useNavigate();

    function closeApp() {
        localStorage.removeItem("token");
        localStorage.removeItem("image");
        navigate("/");
    }

    return (
        <Top>
            <h1>TrackIt</h1>
            <article>
                <img src={`${image}`} alt='foto do usuário' />
                <button onClick={closeApp}>
                    <div>
                        <h4>S</h4><h4>A</h4><h4>I</h4><h4>R</h4>
                    </div>
                </button>
            </article>
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
    
    article {
        display: flex;
        align-items: center;
    }

    article img {
        margin-right: 10px;
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }

    article button {
        margin-right: 20px;
        width:22px;
        height: 65px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        background-color: #1480c7;
        font-family: 'Lexend Deca';
        font-size: 12px;
        line-height: 13px;
        color:#FFFFFF;
        cursor: pointer;
    }
`;
