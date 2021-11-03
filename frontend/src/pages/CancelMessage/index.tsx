import { useEffect, useState } from "react"
import { Redirect, useParams } from "react-router"
import { disableUserByUiid } from "../../services/DisableUserService"
import { getUserByUuid } from "../../services/UiidExistsService"
import {
    CancelSection, LinkButton
} from "./styles"

const CancelMessage = () => {
    const { uuid } = useParams<{ uuid: string }>()
    const [redirect, setRedirect] = useState<any>()
    const [messageSuccess, setMessageSuccess] = useState<any>()

    useEffect(() => {
        async function fetchApi() {
            const response = await getUserByUuid(uuid)
            const userIsDisabled = (await response.json())?.user.disabled
            let redirect404 = ((response.status == 404) || userIsDisabled) ? <Redirect to="/404" /> : ""
            setRedirect(redirect404)
        }
        fetchApi()
    }, [])

    const handleDisable = async () => {
        setMessageSuccess(await disableUserByUiid(uuid))
    }

    return (
        <CancelSection>
            {redirect}
            <div>
                {
                    !!messageSuccess
                        ? <h1>Cancelado com sucesso </h1>
                        : <LinkButton href="#!" onClick={handleDisable}>Cancelar Lembrete</LinkButton>
                }
            </div>
        </CancelSection>
    )
}
export {
    CancelMessage
}