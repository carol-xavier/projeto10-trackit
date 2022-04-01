import {useContext, useEffect, useState} from 'react';
import TokenContext from '../Contexts/TokenContext';
import axios from 'axios';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Header from './Header';
import Footer from './Footer';

function TodayPage() {
    const { loginData } = useContext(TokenContext);

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
                "Authorization": `Bearer ${loginData.token}`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL, config);

        promise.then((response) => {
            const { data } = response;
            console.log("DEU CERTO",data)
            setTodayHabits(data);
        })
        promise.catch((err) => {
            console.log("Deu ruim", err.response.statusText);
        })
    }, [])

    function showTodayList(){
        
        return todayHabits.map((habit) => {
            const {id, name, done, currentSequence, highestSequence} = habit;
            return <ToDo tabIndex={id}>
                <h6>{name}</h6>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Sequência atual: {highestSequence} dias</p>
                <input type="checkbox" value={done} />
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
            <p>Você pode criar uns hábitos bacaninhas lá na página Hábitos</p>}
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

const HabitsList = styled.div `
    margin-bottom:20%;
    display: flex;
    flex-direction:column;
    align-items: center;
`;

const ToDo = styled.div `
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

    input{
        position:absolute;
        right: 10px;
        width: 69px;
        height: 69px;
    }

    h6 {
        margin-left: 15px;
    }

    p {
        margin-left: 15px;
        font-size: 13px;
    }
`;