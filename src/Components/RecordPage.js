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
            <Footer />
        </Section>
    )
}

export default RecordPage;
const Section = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
`

const Container = styled.div`
    margin-top: 25%;
    display: flex;
    align-items: center;
    
    h1 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
`