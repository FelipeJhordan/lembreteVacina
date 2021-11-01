import { ButtonBack } from '../../components/ButtonBack'
import { NotFoundSection, NotFoundHeadingMensage as NotFoundMensage } from './styles'

const NotFound = () => {
    return <>
        <NotFoundSection>
            <div>
                <NotFoundMensage>Página Inválida</NotFoundMensage>
                <ButtonBack />
            </div>
        </NotFoundSection>
    </>
}

export {
    NotFound
}