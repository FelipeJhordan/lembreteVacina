import { render, screen } from '@testing-library/react'
import { ButtonBack } from '.'

describe("Component de voltar", () => {
    test("Deve renderizar com o texto 'Voltar' caso não passar nenhum elemento filho", () => {
        render(<ButtonBack />)

        const buttonText = screen.getByText("Voltar")

        expect(buttonText).toBeInTheDocument()
    })
})