import { ButtonBack } from '../../components/ButtonBack'
import { FormSection, Field, Form as MyForm } from './styles'
import {
    ErrorMessage,
    Formik,
} from 'formik'
import { Fetch as api } from '../../services/api'
import { Http_Methods } from '../../models/methods'
import { schema } from './schema'

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
                <h2>
                    Formulário
                </h2>
                <div>
                    <Formik initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={async (values, actions) => {
                            const resp = await api.request("user/save/", Http_Methods.POST, {
                                body: JSON.stringify({ user: values })
                            })
                            console.log(JSON.stringify({ user: values }))
                            console.log(resp)
                        }}>
                        {(formik) => (
                            <MyForm>
                                <label htmlFor="name">Nome </label>
                                <Field id="name" name="name" />
                                <ErrorMessage name="name" />
                                <br />
                                <label htmlFor="email">E-mail </label>
                                <Field id="email" name="email" />
                                <ErrorMessage name="email" />
                                <br />
                                <label htmlFor="nomeVacina">Nome Vacina</label>
                                <Field id="nomeVacina" name="vacina.name" />
                                <ErrorMessage name="vacina.name" />
                                <br />
                                <label htmlFor="dose">Dose</label>
                                <Field id="dose" name="vacina.dose" />
                                <ErrorMessage name="vacina.dose" />
                                <br />
                                <label htmlFor="dataAplicacao">Data Aplicação</label>
                                <Field id="dataAplicacao" type="date" name="vacina.dataAplicacao" />
                                <div role="group" aria-labelledby="checkbox-group">
                                    <label>
                                        <Field type="checkbox" name="vacina.reminderConfig.send15DaysBefore" />
                                        15 dias
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="vacina.reminderConfig.send7DaysBefore" />
                                        7 dias
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="vacina.reminderConfig.send1DaysBefore" />
                                        1 dia
                                    </label>
                                </div>
                                <button type="submit" disabled={!(formik.isValid)}>Enviar</button>
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
