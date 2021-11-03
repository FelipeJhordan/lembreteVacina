import styled from "styled-components";
import { Section } from "../../styles";
import { Link as LinkReactDom } from 'react-router-dom'

const HomeSection = styled(Section)`
    > div {
        flex-direction : column;
        @media(max-height: 900px) and (max-width: 700px) {
            padding: 0;
        }
    }
`

const Heading = styled.h1`
    color:#ffc;
    text-align: center;
    margin-right: 6rem;
    font-size: 2em;
    @media(max-height: 900px) and (max-width: 700px) {
            font-size: 1.5em;
            font-weight: 700;
        }
`

const AppDescription = styled.p`
    margin-top: 1.6rem;
    font-size: 1.1em;
    font-family: sans-serif;
    color: #fcfcfc;
    padding: 0 10rem;
    line-height: 1.2em;

    @media(max-height: 900px) and (max-width: 700px) {
        padding: 0 0rem;
        font-size: 1em;

    }
`

const Link = styled(LinkReactDom)`
    text-decoration: none;

    font-weight: bolder;
    font-family: roboto;
    font-size: 1.8em;

    border: 3px solid #66ab92;
    padding: 10px 16px 10px 16px;
    border-radius: 10px;

    color: #66ab92;


    &:hover {
        color: #3b4293ff;
        background-color: #66ab92;
    }

    @media(max-height: 900px) and (max-width: 700px) {
        padding: 10px 10px 10px 10px;
        font-size: 1em;
        margin-top: 3rem;
        margin-right: 15px;
    }
`

export {
    HomeSection,
    Link,
    Heading,
    AppDescription
}