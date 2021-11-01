import styled from "styled-components";
import { Section } from "../../styles";
import { Link as LinkReactDom } from 'react-router-dom'

const HomeSection = styled(Section)`
    > div {
        flex-direction : column;
    }
`
const Link = styled(LinkReactDom)`
    text-decoration: none;

    font-weight: bolder;
    font-family: roboto;
    font-size: 1.8em;

    border: 3px solid #fff;
    padding: 10px 16px 10px 16px;
    border-radius: 10px;

    color: #fff;


    &:hover {

    }
`

const Heading = styled.h1`
    color: red;
    font-size: 2em;
    color:#ffc;
    text-align: center;
    margin-right: 6rem;
`

const AppDescription = styled.p`
    margin-top: 1.6rem;
    font-size: 1.1em;
    font-family: sans-serif;
    color: #fcfcfc;
    padding: 0 10rem;
    line-height: 1.2em;
`
export {
    HomeSection,
    Link,
    Heading,
    AppDescription
}