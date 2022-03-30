import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

function RecordPage() {
    return (
        <section>
            <Header />
            <Container>
                <h1>Histórico</h1>
            </Container>
            <Footer />
        </section>
    )
}

export default RecordPage;

const Container = styled.div`
    background-color: #E5E5E5;
    height: 80vh;
    
    h1 {
        margin-top: 70px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
`