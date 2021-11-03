import styled from "styled-components";
import { Section } from "../../styles";
import { Form as FormFormik, Field as FieldFormik, ErrorMessage as ErrorMessageFormik } from "formik"

const FormSection = styled(Section)`
   > div {
        display: flex;
        flex-direction: column;
        padding: 4rem 10rem 4rem 10rem;
        height: max-content;

            @media(max-height: 900px) and (max-width: 700px) {
                padding: 1rem;
            }
   }
`

const Form = styled(FormFormik)`
    background-color: rgba(255,255,255,0.16);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;

`

const Input = styled(FieldFormik)`
    margin-bottom: 0.2rem;
    padding: 3px;
`

const Checkbox = styled(FieldFormik)`

`

const TitleForm = styled.h2`
    color: #fdf;
    letter-spacing: 2px;
    position: absolute;
    top: 1rem;
    right: 43%;

    @media(max-height: 900px) and (max-width: 700px) {
        top: -25px;
        right: 30%;
    }
`

interface inputGroupCustomProps {
    readonly checkInput?: boolean;
}

const InputGroup = styled.div<inputGroupCustomProps>`
    display: flex;
    width: 80%;
    color: #fff;
    font-weight: light;
    font-size: 1.1em;
    flex-direction: ${(props) => (props.checkInput ? "row" : "column")};
    ${(props) => (props.checkInput && `
        label {
            diplay: inline-block;
            margin-right: 20px;
            font-size: 1.1em;
            input {
                margin-right: 6px;
            }
        }
    `)} 

    .wrapper-error-message {
        color: red;
        padding: 0 0;
        margin: 0 0;
    }
`

const WrapperButton = styled.div`
    height: 25.33%;
	width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
`

const ButtonSubmit = styled.button`
    color: #fff;
	transition: all 0.3s;
	position: relative;
    background-color: #66ab92;
    line-height: 50px;
	height: 50px;
	text-align: center;
	width: 250px;
    border: none;
	cursor: pointer;
 span {
	transition: all 0.3s;
    font-size: 1.2em;
}
&::before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 0;
	transition: all 0.3s;
	
	transform: scale(0.1, 1);
}
&:hover span {
	letter-spacing: 2px;
}
&:hover::before {
	opacity: 1;
	transform: scale(1, 1);
}
&::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	transition: all 0.3s;
	background-color: rgba(0,0,0,0.1);
}
&:hover::after {
	opacity: 0;
	transform: scale(0.1, 1);
}

&::before{
  width: 0%;
  height: 100%;
}

&:hover::before{
  width: 100%;
}

@media(max-height: 900px) and (max-width: 700px) {
        width: 50%;
    }
`

export {
    Form,
    Input,
    InputGroup,
    FormSection,
    TitleForm,
    Checkbox,
    ButtonSubmit,
    WrapperButton
}