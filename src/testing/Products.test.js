import React from 'react'
import { fireEvent, screen, render, waitFor } from '@testing-library/react'
import { renderWithProviders } from '../utils/utils-test'
import Products from '../components/Products'
import { useAppDispatch, useAppSelector } from '../store/redux-hooks'
import { testUseAppSelector } from './../store/test-app-selector';
import { shallow } from 'enzyme';
import { store } from './../store/store';

jest.mock("../store/redux-hooks");
jest.mock("../services/api.js")

describe("fetch products", () => {
    const dispatch = jest.fn();

    beforeEach(() => {
        useAppSelector.mockImplementation(testUseAppSelector)
        useAppDispatch.mockImplementation(dispatch)
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    // it("Products Component renders?", async() => {
    //     await waitFor(() => {
    //         console.log(render(<Products />))
    //     const textElement = screen.getByText('Latest Products')
    //     expect(textElement).toBeInTheDocument()
    //     })

    // })

    it("products renders on mount?", done => {
        const wrapper = shallow(<Products />);
        console.log(wrapper);
        let state = store.getState().product
        console.log(state.data);
        setTimeout(() => {
            wrapper.update();
            // let state = wrapper.instance().state;
            expect(state?.data).toBeInTheDocument();
            const textElement = screen.getByText('Latest Products');
            expect(textElement).toBeInTheDocument();
            done();
        })
    })
})
