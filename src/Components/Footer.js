import styled from 'styled-components';

function Footer() {
    return(
    <FooterStyle>
        <p>Aprender a usar a library</p>
    </FooterStyle>
    )
}

export default Footer;

const FooterStyle = styled.div`
    position: fixed;
    bottom:0;
    width:100%;
    height: 70px;
    background-color: #FFFFFF;

    color: #52B6FF;

    display:flex;
    justify-content: center;
`
