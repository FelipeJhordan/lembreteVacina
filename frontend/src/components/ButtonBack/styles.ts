import { Link } from 'react-router-dom';
import styled from "styled-components";

const ButtonBackStyle = styled.button.attrs({

})`
    position: absolute;
    top: 0.5rem;
    left: 0;
    padding: 0.5rem;
    outline: 0;
    border: 0;
    background-color: transparent ;
    color: #fcc;
    cursor: pointer;

    &:before {
         content: "";
         display: inline-block;
         vertical-align: middle;
         position: absolute;
         padding: 0.5rem;
         box-shadow: 2px -2px 0 1px #fff inset;
         border: solid transparent;
         border-width: 0 0 2px 2px;
         transform: rotate(45deg);
         transition: 0.5s linear;
    }
    &:hover {
                &:before {
                    box-shadow: 2px -2px 0 1px #f35 inset;
                    content:"Voltar?";
                    transform: rotate(0);
                }
         }

    @media(max-height: 900px) and (max-width: 700px) {
        left: -50px;
    }
`

export {
    ButtonBackStyle
}