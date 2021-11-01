import styled from "styled-components";


const Main = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(180deg, #a696d2 0, #867abe 25%, #635da8 50%, #3b4293 75%, #002c80 100%);
    `
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
`

export {
    Header,
    Main,
    Footer,
    Section
}