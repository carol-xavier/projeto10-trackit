import { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import TokenContext from '../Contexts/TokenContext';
import logo from '../assets/trackit.png';
import styled from 'styled-components';

function LoginPage() {
    const { token, setToken } = useContext(TokenContext);
    const [userLogin, setUserLogin] = useState({email:"", password:""});

    const navigate = useNavigate();
    
    function login(event) {
        event.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const object = {
            email: userLogin.email,
            password: userLogin.password
        }

        const promise = axios.post(URL,object);
        
        promise.then(response => {
            const {data} = response;
            setToken(data.token);
            navigate("/hoje");            
        });

        promise.catch((err) => {
            console.log(err.response.statusText);
            alert("Falha no login. Tente novamente.");
            setUserLogin({email:"", password:""});
        });
    }

    return (
        <Section>
            <img src={logo} />
            <form onSubmit={login}>
                <input type="email" value={userLogin.email} placeholder="email" onInput={e => setUserLogin({...userLogin, email: e.target.value})} />
                <input type="password" value={userLogin.password} placeholder="senha" onInput={e => setUserLogin({...userLogin, password: e.target.value})} />
                <button>Entrar</button>
            </form>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Section>
    )
}

export default LoginPage;


const Section = styled.div`
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        height: 178.38px;
    }

    form {
        margin-top: 15%;
        display: flex;
        flex-direction: column;
    }

    input {
        margin-bottom: 2%;
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
    }

    p {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`;




