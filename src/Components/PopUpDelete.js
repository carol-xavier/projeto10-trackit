import styled from 'styled-components';
import axios from 'axios';

function PopUpDelete(props){
    const {id, callbackEffect, token, callbackPopUp} = props;

    function deleteHabit(event){
        event.preventDefault();
        
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config);

        promise.then(() => {
            callbackPopUp(false);
            callbackEffect(true);
        });
        promise.catch((err) => {
            console.log(err.response.statusText);
        })
    }

    return <PopUp>
        <div>
        <h1>Tem certeza que deseja deletar esse hábito?</h1>
        <h1>Cancelar</h1>
        <button onClick={deleteHabit}>Confirmar</button>
        </div>
    </PopUp>
}

export default PopUpDelete;

const PopUp = styled.div `
    position: fixed;
    z-index: 2;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    font-family: 'Lexend Deca';
    color: #666666;

    div {
        position: relative;
        top:35%;
        margin-right: 5%;
        margin-left: 5%;
        height: 20vh;
        background: #fff;
        border-radius: 5px;
        padding: 20px;
        border: 1px solid #999;
        overflow: auto;

        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    button {
        width: 84px;
        height: 35px;
        border: none;
        border-radius: 5px;
        background-color: #52B6FF;
        font-family: 'Lexend Deca';
        color:#FFFFFF;
    }
`;
