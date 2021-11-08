import { useHistory } from "react-router"
import { ButtonBackStyle } from "./styles"
interface IPropsButtonBack {
    link?: string
}

const ButtonBack: React.FC<IPropsButtonBack> = ({ link, children }) => {
    let history = useHistory()

    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <>
            <ButtonBackStyle onClick={goToPreviousPath}>
                {children || "Voltar"}
            </ButtonBackStyle>
        </>
    )
}


export {
    ButtonBack
}