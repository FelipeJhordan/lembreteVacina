import styled from "styled-components";

const Header = styled.header`
    height: 10vh;
    opacity: 0.12;
    `

const Footer = styled.footer`
    height: 10vh;
    `
const Section = styled.section`
    position: relative;
    height: 80vh;
    width: 50%;
    align-self: center;
    & > div {
         padding: 13rem 10rem 10rem 10rem;
         display: flex;
         align-items: center;
         justify-content: center;
    }

    @media(max-height: 900px) and (max-width: 700px) {
        width: 85%;
    }
`

export {
    Header,
    Footer,
    Section
}