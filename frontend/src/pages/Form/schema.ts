import * as yup from 'yup'

let schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Tenha certeza que o e-mail é válido").required("e-mail obrigatório"),
    vacina: yup.object().shape({
        name: yup.string().required("A vacina precisa ter um nome"),
        dose: yup.number().min(1, "Não existe dose 0").required("A dose precisa existir"),
        dataAplicacao: yup.date().required("Informe uma data")
    })
})

export { schema }