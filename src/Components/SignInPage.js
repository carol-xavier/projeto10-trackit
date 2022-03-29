import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/trackit.png';

function SignInPage(){
    return (
        <Section>
            <img src={logo} />
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input placeholder="nome" />
                <input type="file" placeholder="foto" />
                <button>Cadastrar</button>
            </form>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Section>
    )
}

export default SignInPage;

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

    input[type="file"]::-webkit-file-upload-button {
        visibility: hidden;
    }  

    input[type="file"] {
        color: rgba(0, 0, 0, 0);
    }

    /* input[type="file"]::-webkit-input-placeholder {
        color: red;
    } */

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




