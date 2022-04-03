import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

function RecordPage() {
    return (
        <Section>
            <Header />
            <Container>
                <h1>Histórico</h1>
            </Container>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Footer />
        </Section>
    )
}

export default RecordPage;
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
`

const Container = styled.div`
    margin-top: 80px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    
    h1 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
`