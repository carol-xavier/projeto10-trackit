import styled from 'styled-components';

function Header() {
    return (
        <Headline>
            <h1>TrackIt</h1>
            <img src={"#"} alt=' ' />
        </Headline>
    )
}

export default Header;


// Como importar fontes com o styled-components??


const Headline = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        margin-left: 3%;
        font-family: 'Playball';
        font-weight: 400;
        font-size: 38.982px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`
