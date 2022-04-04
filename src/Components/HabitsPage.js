import { useState, useEffect, useContext } from 'react';
import TokenContext from '../Contexts/TokenContext';
import axios from 'axios';
import styled from 'styled-components';
import Table from './Table';
import PopUpDelete from './PopUpDelete';
import Header from './Header';
import Footer from './Footer';
import trashcan from '../assets/pictures/trashcan-icon.png';
import { ThemeProvider } from 'styled-components';

function HabitsPage() {
    const token = localStorage.getItem("token");

    const [habitTable, setHabitTable] = useState(false);

    const [renderHabits, setRenderHabits] = useState([]);
    
    const [newHabit, setNewHabit] = useState({ name: '', days: new Map()});

    const [load, setLoad] = useState(false);

    const [callUseEffect, setCallUseEffect] = useState(false);

    const [popUp, setPopUp] = useState("");

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
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
            console.log(err.response.statusText);
        })

    }, [callUseEffect])

    function askDeleteHabit(id){
        setPopUp(id);
    }

    function showHabitsList() {
        const weekDays = [
            { letter: 'D', number: 0 },
            { letter: 'S', number: 1 },
            { letter: 'T', number: 2 },
            { letter: 'Q', number: 3 },
            { letter: 'Q', number: 4 },
            { letter: 'S', number: 5 },
            { letter: 'S', number: 6 }
        ];

        return renderHabits.map((habit) => {
            const { id, name, days } = habit;
            return <HabitContainer key={id}>
                <h1>{name}</h1>
                <button onClick={() => askDeleteHabit(id)}><img src={trashcan} alt='Botão para deletar' /></button>
                <section>    
                    {weekDays.map((day, index) => {
                        return <ThemeProvider theme={days.includes(day.number) ? invertedColor : color} key={index}>
                            <Day>{day.letter}</Day>
                        </ThemeProvider>;
                    })}
                </section>
            </HabitContainer>
        })
    }
    const showTotalHabits = showHabitsList();

    return (
        <Section>
            <Header />
            <Container>
                <h1>Meus hábitos</h1>
                <button onClick={() => setHabitTable(!habitTable)}>+</button>
            </Container>

            <BodyBox>
            {habitTable ? <Table 
                habit={newHabit}
                token={token}
                callback={setNewHabit}
                callbackEffect={setCallUseEffect}
                callbackTable={setHabitTable}
                load={load}
                callbackLoad={setLoad}
            /> : " "}

            {popUp && <PopUpDelete 
                id={popUp} 
                callbackEffect={setCallUseEffect} 
                token={token}
                callbackPopUp = {setPopUp} />}

            {renderHabits.length > 0 ? showTotalHabits
                : <p>Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!</p>}
            </BodyBox>

            <Footer />
        </Section>
    )
}

export default HabitsPage;

const Section = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    overflow-y: scroll;

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
    margin-top: 80px;
    margin-left:10px;
    margin-right:10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        border: none;
        background: #52B6FF;
        border-radius: 5px;
        margin-right: 15px;

        font-family: 'Lexend Deca';
        color:#FFFFFF;
        font-weight: 400;
        font-size: 27px;
        line-height: 5px;
    }
`;

const BodyBox = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;

    margin-bottom:30%;
`;

const HabitContainer = styled.div`
    position:relative;
    background-color: #FFFFFF;
    margin-top:10px;
    width: 340px;
    /* height: 91px; */
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
        margin:10px;
        margin-left:15px;
        margin-right: 30px;
    }
    
    section {
        margin: 10px 15px;
        /* margin-left:15px; */
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


