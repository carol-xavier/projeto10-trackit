import { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import TokenContext from '../Contexts/TokenContext';
import HabitsContext from '../Contexts/HabitsContext';
import axios from 'axios';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Header from './Header';
import Footer from './Footer';
import check from '../assets/pictures/check.png';


function TodayPage() {
    const { loginData } = useContext(TokenContext);
    const { habitsPercentage, setHabitsPercentage } = useContext(HabitsContext);

    const [todayHabits, setTodayHabits] = useState([]);
    const [callTodayHabits, setCallTodayHabits] = useState(false);

    dayjs.locale('pt-br');
    require('dayjs/locale/pt-br');
    let now = dayjs();
    let getToday = dayjs(now).locale('pt-br').format('dddd, DD/MM');
    let firstLetter = getToday[0].toUpperCase();
    let end = getToday.slice(1);
    let today = firstLetter + end;

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${loginData.token} `
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL, config);

        promise.then((response) => {
            const { data } = response;
            setTodayHabits(data);
            getPercentage();
        })
        promise.catch((err) => {
            console.log("Deu ruim", err.response.statusText);
        })
    }, [callTodayHabits])

    function getPercentage() {
        const doneHabits = todayHabits.filter((habit) => habit.done === true);
        let percentage = 0;
        if (todayHabits.length > 0) {
            percentage = Math.round((doneHabits.length / todayHabits.length) * 100);
        }
        setHabitsPercentage(percentage);
        //Recebendo o seguinte aviso: "Warning: Cannot update a component (`App`) 
        // while rendering a different component (`TodayPage`)" Porém, está funcionando normalmente.
    }

    function checkHabit(id,done) {
        let URL="";

        const config = {
            headers: {
                "Authorization": `Bearer ${loginData.token}`
            }
        }
        
        if(done){
            URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        }else{
            URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        }
        
        const promise = axios.post(URL, "", config);

        promise.then(() => {
            setCallTodayHabits(!callTodayHabits);
        })
        promise.catch((err) => {
            console.log("Deu ruim", err.response.statusText);
        })
    }

    function showTodayList() {
        return todayHabits.map((habit) => {
            const { id, name, done, currentSequence, highestSequence } = habit;
            return <ToDo key={id}>
                <h6>{name}</h6>

                <SequenceCSS>
                <p>Sequência atual: <SpanCurrent selected={done}>{currentSequence}
                    {currentSequence !== "0" && currentSequence !== "1" ? ' dia' : ' dias'}</SpanCurrent>
                </p>
                <p>Seu recorde: <SpanHighest currentSeq={currentSequence} highestSeq={highestSequence} >{highestSequence}
                    {highestSequence !== "0" && highestSequence !== "1" ? ' dia' : ' dias'}</SpanHighest>
                </p>
                </SequenceCSS>

                <ThemeProvider theme={done ? selectedTheme : deafultTheme}>
                    <Checkbox onClick={() => checkHabit(id, done)}>
                        <img src={check} alt="Botão check" />
                    </Checkbox>
                </ThemeProvider>
            </ToDo>
        })
    }
    const showHabits = showTodayList();

    getPercentage();
    return (
        <Section>
            <Header />
            <Container>
                <h1>{today}</h1>
                {habitsPercentage ? <p>{habitsPercentage}% dos hábitos concluídos</p>
                    : <h2>Nenum hábito concluído ainda</h2>}
            </Container>

            <HabitsList>
                {todayHabits.length > 0 ? showHabits
                    : <h3>Você pode criar uns hábitos bacaninhas lá na página Hábitos</h3>}
            </HabitsList>
            <Footer />
        </Section>
    )
}

export default TodayPage;

function currentDaysColor(props) {
    const { selected } = props;
    if (selected) {
        return selectedTheme.dfColor;
    } else {
        return defaultDayColor.dfColor;
    }
}

function highestDayColor(currentSeq, highestSeq){
    if (highestSeq !== 0) {
        if (currentSeq === highestSeq) {
            return selectedTheme.dfColor;
        } else {
            return defaultDayColor.dfColor;
        }
    } 
}

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
    margin-top: 80px;
    margin-left:10px;

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

    p {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #8FC549;
    }
`;

const HabitsList = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;

    margin-bottom:30%;
`;

const ToDo = styled.div`
    position:relative;
    background-color: #FFFFFF;
    margin-top:10px;
    width: 340px;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;

    display:flex;
    flex-direction: column;
    justify-content: space-evenly;

    h6 {
        margin: 13px;
        margin-left: 15px;
        margin-right: 85px; 
    }

    p {
        margin-left: 15px;
        font-size: 13px;
        line-height: 16px;
    }
`;
const SequenceCSS = styled.div `
    margin-bottom:13px;
`;

const Checkbox = styled.div`
    position:absolute;
    right: 13px;
    top:10%;
    width:69px;
    height: 69px;
    border-radius: 5px;
    background-color:${props => props.theme.dfColor};
    border: 1px solid #D4D4D4;
    cursor: pointer;
    text-align: center;
    line-height: 87px;

        img{
            width: 32px;
            height: 35px;
        }
`;

const deafultTheme = {
    dfColor: '#EBEBEB'
};

const selectedTheme = {
    dfColor: '#8FC549'
};

const defaultDayColor = {
    dfColor: '#666666'
}

const SpanHighest = styled.span`
    color: ${(props) => highestDayColor(props.currentSeq, props.highestSeq)}
`;

const SpanCurrent = styled.span`
    color: ${(selected) => currentDaysColor(selected)}
`;

