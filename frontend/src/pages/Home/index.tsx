import {
    HomeSection, Link, Heading, AppDescription
} from "./styles"

const pContent = "Aplicação de envio de e-mail agendado para lembrar o usuário de vacinar, dado algumas informações pelo usuário como:" +
    " email, data vacinação, personalização para avisar em 1, 7 ou 15 dias antes da data prevista..."

const Home = () => {
    return (
        <>
            <HomeSection>
                <Heading> Lembrete Vacina</ Heading>
                <AppDescription>{pContent}</AppDescription>
                <div>
                    <Link to="form">Ir para o formulário</Link>
                </div>
            </HomeSection>
        </>
    )
}

export {
    Home
}