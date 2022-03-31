import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import styled from 'styled-components';

function Table(props) {
    const { habit, token, callback, callbackEffect, callbackTable, load, callbackLoad } = props;
    const { name, days } = habit;

    function cleanTable() {
        callbackTable(false);
        callbackLoad(false);
    }

    function sendHabit(event) {
        event.preventDefault();
        callbackLoad(true);

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        if (days.length > 0) {
            const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
            const object = {
                name,
                days
            }

            const promise = axios.post(URL, object, config);
            promise.then((response) => {
                const { data } = response;
                callback({ name: "", days: [] });
                callbackLoad(false);
                callbackTable(false);
                callbackEffect(true);
            });

            promise.catch((err) => {
                console.log(err.response.statusText);
                callbackLoad(false);
                alert(`Não foi possível processar o hábito. ${err.response.statusText}`);
                callback({ name: "", days: [] });
            })
        } else {
            alert("Escolha quais dias da semana você quer executar esse hábito ;)");
            callbackLoad(false);
        }
    }


    return <Form>
        <form onSubmit={sendHabit}>
            <section>
                <label htmlFor='name'></label>
                <input required value={name} type="text" id="name" placeholder="nome do hábito"
                    onInput={e => callback({ ...habit, name: e.target.value })} disabled={load} />

                <div>
                    <input value={days} type="checkbox" id='7'
                        onInput={() => callback({ ...habit, days: [...days, 7] })} disabled={load} />
                    <label htmlFor='7'>D</label>
                    <input value={days} type="checkbox" id='1'
                        onInput={() => callback({ ...habit, days: [...days, 1] })} disabled={load} />
                    <label htmlFor='1'>S</label>
                    <input value={days} type="checkbox" id='2'
                        onInput={() => callback({ ...habit, days: [...days, 2] })} disabled={load} />
                    <label htmlFor='2'>T</label>
                    <input value={days} type="checkbox" id='3'
                        onInput={() => callback({ ...habit, days: [...days, 3] })} disabled={load} />
                    <label htmlFor='3'>Q</label>
                    <input value={days} type="checkbox" id='4'
                        onInput={() => callback({ ...habit, days: [...days, 4] })} disabled={load} />
                    <label htmlFor='4'>Q</label>
                    <input value={days} type="checkbox" id='5'
                        onInput={() => callback({ ...habit, days: [...days, 5] })} disabled={load} />
                    <label htmlFor='5'>S</label>
                    <input value={days} type="checkbox" id='6'
                        onInput={() => callback({ ...habit, days: [...days, 6] })} disabled={load} />
                    <label htmlFor='6'>S</label>
                </div>

            </section>
            <Options>
                <h6 onClick={cleanTable}>Cancelar</h6>
                <button>{load ?
                    <ThreeDots color="#FFFFFF" width="51px" height="13px" /> : <div>Salvar</div>}
                </button>
            </Options>
        </form>
    </Form>
}

export default Table;

const Form = styled.div`
    width: 340px;
    height: 180px;
    margin-top: 5%;
    border-radius: 5px;
    background-color: #FFFFFF;
    font-family: 'Lexend Deca';

    section{
        margin-left: 18px;
    }

    input[type=text] {
        margin-top: 18px;
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
    }
    input[type=text]::placeholder{
        font-family: 'Lexend Deca';
        font-size: 18px;
        color: #D4D4D4;
    }

    div input {
        display: none!important;
    }
    div input[type=checkbox] + label {
        width:30px;
        height: 30px;
        margin-top: 8px;
        margin-right: 3px;
        border-radius: 5px;
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        cursor: pointer;

        display: inline-block;

        color: #D4D4D4;
        text-align: center;
        line-height: 30px;
    }

    div input[type=checkbox]:checked + label  {
        background-color: #CFCFCF;
        color: #FFFFFF;
    }
`

const Options = styled.div`
    margin-top: 30px;
    margin-bottom: 15px;
    display:flex;
    align-items: center;
    justify-content: flex-end;

    button {
        margin-right: 15px;
        margin-left:30px;
        width: 84px;
        height: 35px;
        border: none;
        background-color: #52B6FF;
        border-radius: 5px;
        color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-size: 16px;
    }
`