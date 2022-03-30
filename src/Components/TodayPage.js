import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

function TodayPage() {
    return (
        <Section>
            <Header />
            <Container>
                <h1>To be done...</h1>
            </Container>
            <Footer />
        </Section>
    )
}

export default TodayPage;

const Section = styled.div`
    background-color: #E5E5E5;
    height: 80vh;
`

const Container = styled.div`
    margin-top: 20%;
    display: flex;
    align-items: center;

    h1 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
`