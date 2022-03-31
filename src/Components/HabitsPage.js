import { useState, useEffect, useContext } from 'react';
import TokenContext from '../Contexts/TokenContext';
import axios from 'axios';
import styled from 'styled-components';
import Table from './Table';
import Header from './Header';
import Footer from './Footer';
import trashcan from '../assets/pictures/trashcan-icon.png';
import { ThemeProvider } from 'styled-components';

function HabitsPage() {
    const { loginData } = useContext(TokenContext);
    console.log(loginData.token);

    const [habitTable, setHabitTable] = useState(false);

    const [renderHabits, setRenderHabits] = useState([]);

    const [newHabit, setNewHabit] = useState({ name: '', days: [] });

    const [load, setLoad] = useState(false);

    const [callUseEffect, setCallUseEffect] = useState(false);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg4NCwiaWF0IjoxNjQ4NzM5MDM1fQ.GnIrpTBmBMcb6CROzemO8tFRhgizl-bJ3-2ddzhvkoc`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.get(URL, config);

        promise.then((response) => {
            const { data } = response;
            setRenderHabits(data);
            setCallUseEffect(false);
            showHabitsList();
        })
        promise.catch((err) => {
            console.log("Deu ruim", err.response.statusText);
        })

    }, [callUseEffect])

    function showHabitsList() {
        return renderHabits.map((habit) => {
            const { id, name, days } = habit;
            return <HabitContainer key={id}>
                <h1>{name}</h1>
                <button><img src={trashcan} alt='Botão para deletar' /></button>
                <section>     {/*  TEM COMO NÃO REPETIR ESSES ELEMENTOS? */}
                    <ThemeProvider theme={days.includes(7) ? invertedColor : color}>
                        <Day index="7">D</Day>
                    </ThemeProvider>
                    <ThemeProvider theme={days.includes(1) ? invertedColor : color}>
                        <Day index="1">S</Day>
                    </ThemeProvider>
                    <ThemeProvider theme={days.includes(2) ? invertedColor : color}>
                        <Day index="2">T</Day>
                    </ThemeProvider>
                    <ThemeProvider theme={days.includes(3) ? invertedColor : color}>
                        <Day index="3">Q</Day>
                    </ThemeProvider>
                    <ThemeProvider theme={days.includes(4) ? invertedColor : color}>
                        <Day index="4">Q</Day>
                    </ThemeProvider>
                    <ThemeProvider theme={days.includes(5) ? invertedColor : color}>
                        <Day index="5">S</Day>
                    </ThemeProvider>
                    <ThemeProvider theme={days.includes(6) ? invertedColor : color}>
                        <Day index="6">S</Day>
                    </ThemeProvider>
                </section>
            </HabitContainer>
        })
    }
    const showHabits = showHabitsList();

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
                callbackEffect={setCallUseEffect}
                callbackTable={setHabitTable}
                load={load}
                callbackLoad={setLoad}
            /> : " "}

            <HabitList>
                {(renderHabits.length > 0) ? showHabits
                    : <p>Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!</p>}
            </HabitList>
            <Footer />
        </Section>
    )
}

export default HabitsPage;

const Section = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-top:10%;
        margin-left:10px;
        margin-right:10px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        color: #666666;
    }
`;

const Container = styled.div`
    margin-top: 25%;
    margin-left:10px;
    margin-right:10px;
    display: flex;
    align-items: center;

    h1 {
        margin-right: 150px;
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
`;

const HabitList = styled.div`
    margin-bottom:20%;
`;
const HabitContainer = styled.div`
    position:relative;
    background-color: #FFFFFF;
    margin-top:10px;
    width: 340px;
    height: 91px;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;

    display:flex;
    flex-direction: column;
    justify-content: space-evenly;

    button {
        position:absolute;
        right: 10px;
        top:10px;
        border: none;
        background-color: transparent;
    }

    img {
        width:14px;
        height: 16px;
    }

    h1 {
        margin-left:15px;
    }
    
    section {
        margin-left:15px;
    }
   
`;

const Day = styled.div`
        display: inline-block;
        width:30px;
        height: 30px;
        margin-top: 8px;
        margin-right: 3px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        text-align: center;
        line-height: 30px;

        color: ${props => props.theme.dfColor};
        background-color: ${props => props.theme.dfBack};
`;

const color = {
    dfColor: '#D4D4D4',
    dfBack: '#FFFFFF'
};

const invertedColor = {
    dfColor: '#FFFFFF',
    dfBack: '#D4D4D4'
};


