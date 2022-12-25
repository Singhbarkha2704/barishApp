import { fireEvent, render, screen } from '@testing-library/react';
import Contact from './../components/Contact';

test('Contact Test Case', () => {
    render(<Contact />);

    //-------Text---------
    const textElement = screen.getByText('Contact')
    expect(textElement).toBeInTheDocument()
})

test('Contact Test Case - query by Label Text', () => {
    render(<Contact />);

    // ---------label-------------
    const textElement = screen.queryByLabelText('Contact Name') //for label element
    expect(textElement).toBeInTheDocument()
})

test('Contact Test Case - query by Placeholder Text', () => {
    render(<Contact />);

    // ---------Placeholder-------------
    const textElement = screen.queryByPlaceholderText('Enter Email') //for input element
    expect(textElement).toBeInTheDocument()
})

test('check button exists', () => {
    render(<Contact />);

    // ---------by Role-------------
    const buttonElement = screen.queryByRole('button',{type:'submit'}) //for checking element existence and its type attr wid value
    // const buttonElement = screen.queryByRole('heading',{name:'Contact'}) //name attr is the content of the element
    expect(buttonElement).toBeInTheDocument()
})

test('check by id', ()=>{
    render(<Contact/>);
    const idElement = screen.queryByTestId('contact-head') 
    expect(idElement).toBeNull()
})

test('check occurences of heading', ()=>{
    render(<Contact/>);
    const headingElement = screen.queryAllByRole('heading') 
    // expect(headingElement).toHaveLength(2)
    //OR
    expect(headingElement.length).toBe(2)
})

describe('check validation of contact form', () => {
    it('Disable on Click button?', () => {
        render(<Contact />)
        const btnElement = screen.getByRole('button')
        fireEvent.click(btnElement)
        expect(btnElement).toBeDisabled()
        
    })

    it('Success msg after clicking submit btn?', () => {
        render(<Contact />)
        const btnElement = screen.getByRole('button')
        fireEvent.click(btnElement)
        const message=screen.getByTestId('test-msg')
        expect(message).toHaveTextContent('Added!')
        
    })

    it('Valid Contact Name?', () => {
        render(<Contact />)
        const inputElement = screen.getByPlaceholderText('Enter Name')
        fireEvent.change(inputElement,{target:{value:'fsgs'}}) //if any string
        const message=screen.getByTestId('test-msg')
        expect(message).toHaveTextContent('')
        
    })

    it('Invalid Contact Name?', () => {
        render(<Contact />)
        const inputElement = screen.getByPlaceholderText('Enter Name')
        fireEvent.change(inputElement,{target:{value:'626482'}}) //if any number
        const message=screen.getByTestId('test-msg')
        expect(message).toHaveTextContent('Number is not Allowed!')
        
    })

    // it('use WaitFor?', () => {
    //     render(<Contact />)
    //     const inputElement = screen.getByPlaceholderText('Enter Name')
    //     fireEvent.change(inputElement,{target:{value:'626482'}}) 
    //     const message=screen.getByTestId('test-msg')
    //     expect(message).toHaveTextContent('Number is not Allowed!')
        
    // })


    
})







