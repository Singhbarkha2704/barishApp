import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('About Test Case', () => {
    render(<About />);
    const testElement = screen.getByText('About Us')
    expect(testElement).toBeInTheDocument()
})

test('test by find', async () => {
    render(<About />)
    const testElement = await screen.findByText('About Us')
    expect(testElement).toBeInTheDocument()
})

test('test by query',  () => {
    render(<About />)
    const testElement =  screen.queryByText('Abou',{exact:false})
    expect(testElement).toBeInTheDocument()
})