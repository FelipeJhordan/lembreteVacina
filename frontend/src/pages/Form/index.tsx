import { ButtonBack } from '../../components/ButtonBack'
import {
    WrapperButton,
    FormSection,
    Input,
    InputGroup,
    ButtonSubmit,
    Checkbox,
    Form as MyForm,
    TitleForm
} from './styles'
import { Formik, ErrorMessage as ErrorMessageFormik } from 'formik'
import { schema } from './schema'
import { saveUser } from '../../services/UserSaveService'

interface IMyFormValues {
    name: string,
    email: string,
    vacina: {
        name: string,
        dose: number,
        dataAplicacao: string,
        reminderConfig: {
            send15DaysBefore: boolean,
            send7DaysBefore: boolean,
            send1DaysBefore: boolean
        }
    }
}

const WrapperErrorMessage = (props: { name: string }) => {
    return (
        <div className="wrapper-error-message">
            <ErrorMessageFormik name={props.name} />
        </div>
    )
}

const Form = () => {
    const initialValues: IMyFormValues = {
        name: "",
        email: "",
        vacina: {
            name: "",
            dose: 1,
            dataAplicacao: new Date().toISOString().substr(0, 10),
            reminderConfig: {
                send15DaysBefore: true,
                send7DaysBefore: true,
                send1DaysBefore: true
            }
        }
    }
    return (
        <>
            <FormSection>
                <ButtonBack />
                <TitleForm>
                    Formulário
                </TitleForm>
                <div>
                    <Formik initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={async (values, actions) => {
                            const resp = await saveUser(values)
                        }}>
                        {(formik) => (
                            <MyForm>
                                <InputGroup>
                                    <label htmlFor="name">Nome </label>
                                    <Input id="name" name="name" />
                                    <WrapperErrorMessage name="name" />
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="email">E-mail </label>
                                    <Input id="email" name="email" />
                                    <WrapperErrorMessage name="email" />
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="nomeVacina">Nome Vacina</label>
                                    <Input id="nomeVacina" name="vacina.name" />
                                    <WrapperErrorMessage name="vacina.name" />
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="dose">Dose</label>
                                    <Input id="dose" name="vacina.dose" />
                                    <WrapperErrorMessage name="vacina.dose" />
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="dataAplicacao">Data Aplicação</label>
                                    <Input id="dataAplicacao" type="date" name="vacina.dataAplicacao" />
                                    <WrapperErrorMessage name="vacina.dataAplicacao" />
                                </InputGroup>
                                <InputGroup checkInput role="group" aria-labelledby="checkbox-group">
                                    <label>
                                        <Checkbox type="checkbox" name="vacina.reminderConfig.send15DaysBefore" />
                                        15 dias
                                    </label>
                                    <label>
                                        <Checkbox type="checkbox" name="vacina.reminderConfig.send7DaysBefore" />
                                        7 dias
                                    </label>
                                    <label>
                                        <Checkbox type="checkbox" name="vacina.reminderConfig.send1DaysBefore" />
                                        1 dia
                                    </label>
                                </InputGroup>
                                <WrapperButton>
                                    <ButtonSubmit type="submit" disabled={!(formik.isValid)}><span>Enviar</span></ButtonSubmit>
                                </WrapperButton>
                            </MyForm>
                        )}
                    </Formik>
                </div>
            </FormSection>
        </>
    )
}

export {
    Form
}
