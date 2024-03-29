import React,{ useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/pictures/trackit.png';
import styled from 'styled-components';
import {ThreeDots} from 'react-loader-spinner';


function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("token")){
            navigate("/hoje");
        }
    })

    const [userLogin, setUserLogin] = useState({email:"", password:""});
    const [load, setLoad] = useState(false);

    
    function login(event) {
        event.preventDefault();

        setLoad(true);
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const object = {
            email: userLogin.email,
            password: userLogin.password
        }

        const promise = axios.post(URL,object);
        
        promise.then(response => {
            const {data} = response;
            localStorage.setItem("token", data.token);
            localStorage.setItem("image", data.image);
            navigate("/hoje");            
        });

        promise.catch((err) => {
            console.log(err.response.statusText);
            alert("Falha no login. Tente novamente.");
            setLoad(false);
            setUserLogin({email:"", password:""});
        });
    }


    return (
        <Section>
            <img src={logo} alt='Logo do TrackIt' />
            <form onSubmit={login}>
                <input required type="email" value={userLogin.email} placeholder="email" 
                        onInput={e => setUserLogin({...userLogin, email: e.target.value})} disabled={load} />
                <input required type="password" value={userLogin.password} placeholder="senha" 
                        onInput={e => setUserLogin({...userLogin, password: e.target.value})} disabled={load} />
                <button >{load ? 
                        <ThreeDots color="#FFFFFF" width="51px" height="13px" /> : <div>Entrar</div>}
                </button>
            </form>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Section>
    )
}

export default LoginPage;


const Section = styled.div`
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        height: 178.38px;
    }

    form {
        margin-top: 15vh;
        display: flex;
        flex-direction: column;
    }

    input {
        margin-bottom: 2%;
        width: 303px;
        height: 45px;
        left: 36px;
        top: 279px;

        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;

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



