import { useState, useEffect, useContext } from 'react';
import TokenContext from '../Contexts/TokenContext';
import axios from 'axios';
import styled from 'styled-components';
import Table from './Table';
import Header from './Header';
import Footer from './Footer';

function HabitsPage() {
    const { loginData } = useContext(TokenContext);

    const [habitTable, setHabitTable] = useState(false);

    const [newHabit, setNewHabit] = useState({ name: '', days: [] })

    const [load, setLoad] = useState(false);

    const [callUseEffect, setCallUseEffect] = useState(false);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${loginData.token}`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const promise = axios.get(URL, config);

        promise.then((response) => {
            const { data } = response;
            console.log("Deu Bom", data);
        })
        promise.catch((err) => {
            console.log("Deu ruim", err.response.statusText);
        })

    }, [])

    return (
        <Section>
            <Header />
            <Container>
                <h1>Meus hábitos</h1>
                <button onClick={() => setHabitTable(!habitTable)}>+</button>
            </Container>

            {habitTable ? <Table habit={newHabit}
                token={loginData.token}
                callback={setNewHabit}
                callbackTable={setHabitTable}
                load={load}
                callbackLoad={setLoad}
            /> : " "}

            <p>Você não tem nenhum hábito cadastrado ainda.
                Adicione um hábito para começar a trackear!</p>
            <Footer />
        </Section>
    )
}

export default HabitsPage;

const Section = styled.div`
    background-color: #E5E5E5;
    height: 80vh;
`

const Container = styled.div`
    margin-top: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        color:#FFFFFF;
        border: none;
        background: #52B6FF;
        border-radius: 4.63636px;
    }
`

