import styled from "styled-components";
import { Section } from "../../styles";

const CancelSection = styled(Section)`
    > div {
        flex-direction : column;
        justify-content: center;
        align-items: center;
        @media(max-height: 900px) and (max-width: 700px) {
            padding: 0;
        }
    }
`

const LinkButton = styled.a`
    text-decoration: none;

    font-weight: bolder;
    font-family: roboto;
    font-size: 1.4em;

    border: 3px solid #ff1234;
    padding: 10px 16px 10px 16px;
    border-radius: 10px;

    color: #ff1234;
    
    &:hover {
        color: white;
        background-color: #ff1234;
    }

    @media(max-height: 900px) and (max-width: 700px) {
        padding: 10px 10px 10px 10px;
        font-size: 1em;
        margin-top: 3rem;
        margin-right: 15px;
    }
`

export {
    CancelSection,
    LinkButton
}