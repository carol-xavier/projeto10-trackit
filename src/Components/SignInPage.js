import { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import UserContext from '../Contexts/UserContext';
import styled from 'styled-components';
import logo from '../assets/pictures/trackit.png';
import {ThreeDots} from 'react-loader-spinner';

function SignInPage(){
    const { userData, setUserData } = useContext(UserContext);
    const [load, setLoad] = useState(false);
  
    const navigate = useNavigate();

    function signInUser(event) {
        event.preventDefault();

        setLoad(true);
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const object = {
            email: userData.email,
            name: userData.name,
            image: userData.image,
            password: userData.password
        }

        const promise = axios.post(URL,object);
        
        promise.then(response => {
            navigate("/");            
        });

        promise.catch((err) => {
            console.log(err.response.statusText);
            alert("Usuário não cadastrado. Por favor, tente novamente.");
            setLoad(false);
            setUserData({ email: '', name: '', image: '', password: '' });
        });
    }

    return (
        <Section>
            <img src={logo} alt='Logo do TrackIt'/>
            <form onSubmit={signInUser}>
                <input required type="email" value={userData.email} placeholder="email" 
                    onInput={e => setUserData({...userData, email: e.target.value})} disabled={load} />
                <input required value={userData.name} placeholder="nome" 
                    onInput={e => setUserData({...userData, name: e.target.value})} disabled={load} />
                <input required type="text" value={userData.image} placeholder="foto"  
                    onInput={e => setUserData({...userData, image: e.target.value})} disabled={load} />
                <input required type="password" value={userData.password} placeholder="senha" 
                    onInput={e => setUserData({...userData, password: e.target.value})} disabled={load}/>
                <button>{load ? 
                    <ThreeDots color="#FFFFFF" width="51px" height="13px" /> : <div>Cadastrar</div>}
                </button>
            </form>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Section>
    )
}

export default SignInPage;

const Section = styled.div`
    margin-top: 15vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        height: 178.38px;
    }

    form {
        margin-top: 5vh;
        display: flex;
        flex-direction: column;
    } 

    input {
        margin-bottom: 1vh;
        width: 303px;
        height: 45px;
        left: 36px;
        top: 279px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
    }

    input::placeholder {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 19.976px;
        color: #DBDBDB;
    }

    button {
        height: 45px;
        border: none;
        background: #52B6FF;
        border-radius: 4.63636px;

        color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20.976px;

        display:flex;
        justify-content: center;
        align-items: center;
    }

    p {
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`;




