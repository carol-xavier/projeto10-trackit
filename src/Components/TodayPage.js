import { useContext, useEffect, useState } from 'react';
import TokenContext from '../Contexts/TokenContext';
import axios from 'axios';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Header from './Header';
import Footer from './Footer';
import check from '../assets/pictures/check.png';

function TodayPage() {
    const { loginData } = useContext(TokenContext);
    console.log(loginData.token);

    const [todayHabits, setTodayHabits] = useState([]);

    dayjs.locale('pt-br');
    const day = require('dayjs/locale/pt-br');
    let now = dayjs();
    let getToday = dayjs(now).locale('pt-br').format('dddd, DD/MM');
    let firstLetter = getToday[0].toUpperCase();
    let end = getToday.slice(1);
    let today = firstLetter + end;

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg4NCwiaWF0IjoxNjQ4ODI4Njk4fQ.4dUmkfEvZw-0jkaxye5xa69KH1kD5pJIafLR2kns2Sk`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL, config);

        promise.then((response) => {
            const { data } = response;
            console.log("DEU CERTO", data)
            setTodayHabits(data);
        })
        promise.catch((err) => {
            console.log("Deu ruim", err.response.statusText);
        })
    }, [])

    // function checkDoneHabit(){
    //     return console.log('YAY FEZ A TAREFA');
    // }
    // function checkUndoneHabit(){
    //     return console.log('VAI FAZER A TAREFA');
    // }

    function showTodayList() {
        return todayHabits.map((habit) => {
            const { id, name, done, currentSequence, highestSequence } = habit;
            return <ToDo key={id}>
                <h6>{name}</h6>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Sequência atual: {highestSequence} dias</p>
                <div>
                    <input type="checkbox" value={done} id='check' onClick={()=>console.log(habit)}/>
                    <label htmlFor='check'><img src={check} /></label>
                </div>
            </ToDo>
        })
    }
    const showHabits = showTodayList();

    return (
        <Section>
            <Header />
            <Container>
                <h1>{today}</h1>
                <h2>Nenum hábito concluído ainda</h2>
            </Container>

            <HabitsList>
                {todayHabits.length > 0 ? showHabits :
                    <h3>Você pode criar uns hábitos bacaninhas lá na página Hábitos</h3>}
            </HabitsList>
            <Footer />
        </Section>
    )
}

export default TodayPage;

const Section = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    overflow-y: scroll;

    h3 {
        margin-top:10%;
        margin-left:10px;
        margin-right:20px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        color: #666666;
    }
`;

const Container = styled.div`
    margin-top: 25%;
    margin-left:20px;

    h1 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
    
    h2 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
    }
`;

const HabitsList = styled.div`
    margin-bottom:20%;
    display: flex;
    flex-direction:column;
    align-items: center;
`;

const ToDo = styled.div`
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

    h6 {
        margin-left: 15px;
    }

    p {
        margin-left: 15px;
        font-size: 13px;
    }

    div input {
        display: none!important;
    }
    div label img{
        width: 32px;
        height: 35px;
    }
    div input[type=checkbox] + label {
        position:absolute;
        right: 10px;
        bottom:10px;
        width:69px;
        height: 69px;
        border-radius: 5px;
        background-color:#EBEBEB;
        border: 1px solid #D4D4D4;
        cursor: pointer;
        text-align: center;
        line-height: 87px;
    }
    div input[type=checkbox]:checked + label  {
        background-color: #8FC549;
    }
`;
