import Counter from ".";
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Counter Component', ()=>{
    test('deve iniciar o titulo com o valor 0', ()=>{
        // const {} = render(<Counter/>) essa maneira também é possivel pegar os dados retornado do objto, mas vamos pegar pelo screen que o recomendado na documentação
        render(<Counter/>)

        const counterTitle = screen.getByText('0') //se não encontrar ele quebra e nem executa o expect 
        // const counterTitle = screen.queryByText('0') // se não encontrar ele retorna nulo e não quebra
        // const counterTitle = screen.findByText('0') // retorna uma promisse, ou seja, demora um pouco pra ir buscar o item

        expect(counterTitle).toBeInTheDocument();
    })

    test('deve conter um estilo no numeral', ()=>{
        render(<Counter/>)

        const counterTitle = screen.getByText('0')
        
        expect(counterTitle).toHaveClass('showNumber'); // vai procurar se possui essa classe showNumber
    })

    test('deve possuir estilo incial como black', ()=>{
        render(<Counter/>)

        const counterTitle = screen.getByText('0')
        
        expect(counterTitle).not.toHaveStyle('color:green'); //coloco o not qunado eu nao quero que tenha tal comportamento
        expect(counterTitle).not.toHaveStyle('color:red');
        expect(counterTitle).toHaveStyle('color:black');
    })

    test('deve conter um botão incrementar', ()=>{
        render(<Counter/>)

        const buttonIncrement = screen.getByRole('button', {name:/incrementar/i})
        
        expect(buttonIncrement).toBeInTheDocument();
    })

    test('deve conter um botão incrementar com a classe increment ', ()=>{
        render(<Counter/>)

        const buttonIncrement = screen.getByRole('button', {name:/incrementar/i})
        
        expect(buttonIncrement).toHaveClass('increment');
    })

    test('deve conter um botão decrementar', ()=>{
        render(<Counter/>)

        const buttonDecrement = screen.getByRole('button', {name:/decrementar/i})
        
        expect(buttonDecrement).toBeInTheDocument();
    })

    test('deve conter um botão decrementar com a classe decrement ', ()=>{
        render(<Counter/>)

        const buttonDecrement = screen.getByRole('button', {name:/decrementar/i})
        
        expect(buttonDecrement).toHaveClass('decrement');
    })


    test('deve incrementar + 1 ao clicar no botão incrementar ', ()=>{
        render(<Counter/>)

        const buttonIncrement = screen.getByRole('button', {name:/incrementar/i})
        
        expect(screen.queryByText(1)).toBeNull();
        userEvent.click(buttonIncrement)
        expect(screen.getByText(1)).toBeInTheDocument();
    })

    test('deve decrementar - 1 ao clicar no botão decrementar ', ()=>{
        render(<Counter/>)

        const buttonDecrement = screen.getByRole('button', {name:/decrementar/i})
        
        expect(screen.queryByText(-1)).toBeNull();
        userEvent.click(buttonDecrement)
        expect(screen.getByText(-1)).toBeInTheDocument();
    })

    test('deve adicionar o estilo green quando o numero for MAIOR que 0 ', ()=>{
        render(<Counter/>)

        const buttonIncrement = screen.getByRole('button', {name:/incrementar/i})
        
        expect(screen.queryByText(0)).not.toHaveStyle('color:green')
        expect(screen.queryByText(0)).not.toHaveStyle('color:red')
        expect(screen.queryByText(0)).toHaveStyle('color:black')
        userEvent.click(buttonIncrement)
        expect(screen.getByText(1)).toHaveStyle('color:green');
    })

    test('deve adicionar o estilo red quando o numero for MENOR que 0 ', ()=>{
        render(<Counter/>)

        const buttonDecrement = screen.getByRole('button', {name:/decrementar/i})
        
        expect(screen.queryByText(0)).toHaveStyle('color:black')
        expect(screen.queryByText(0)).not.toHaveStyle('color:green')
        expect(screen.queryByText(0)).not.toHaveStyle('color:red')
        userEvent.click(buttonDecrement)
        expect(screen.getByText(-1)).toHaveStyle('color:red');
    })

    
})