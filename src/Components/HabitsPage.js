import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

function HabitsPage() {
    return (
        <Section>
            <Header />
            <Container>
            <h1>Meus hábitos</h1>
            <button>+</button>
            </Container>
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