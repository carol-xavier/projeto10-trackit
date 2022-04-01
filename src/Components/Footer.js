import { useContext } from 'react';
import HabitsContext from '../Contexts/HabitsContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Footer() {
    const { habitsPercentage, setHabitsPercentage } = useContext(HabitsContext);

    const navigate = useNavigate();

    return (
        <FooterStyle>
            <div onClick={() => navigate("/habitos")}>Hábitos</div>
            <section onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    value={habitsPercentage}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </section>
            <div onClick={() => navigate("/historico")}>Histórico</div>
        </FooterStyle>
    )
}

export default Footer;

const FooterStyle = styled.div`
    position:relative;
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    height: 70px;
    background-color: #FFFFFF;

    color: #52B6FF;

    display: flex;
    justify-content: space-around;
    align-items: center;

    section {
        position:absolute;
        bottom: 15%;
        width:91px;
        height: 91px;
    }

    div {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
    }
`


