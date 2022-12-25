import React from "react";
import {render, screen, fireEvent } from '@testing-library/react';
import Wishlist from "../components/Wishlist";
import { useAppDispatch, useAppSelector } from "../store/redux-hooks";
import { testUseAppSelector } from './../store/test-app-selector';
import userEvent from "@testing-library/user-event";
import { wishlistSlice, initialState } from './../store/wishlist';

jest.mock("../store/redux-hooks");
jest.mock("../services/api.js")

describe("wishlist", () => {
    const dispatch = jest.fn();

    beforeEach(() => {
        useAppSelector.mockImplementation(testUseAppSelector)
        useAppDispatch.mockImplementation(dispatch)
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('render Wishlist', () => {
        render(<Wishlist />)
        const textElement = screen.getByText('Wishlist')
        expect(textElement).toBeInTheDocument()
    })

    // it("render wishlist", () => {
    //     dispatch.mockResolvedValueOnce({
    //         json: async () => [{
    //             id: 1,
    //             title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //             price: 109.95,
    //             description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //             category: "men's clothing",
    //             image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //             rating: {
    //                 rate: 3.9,
    //                 count: 120
    //             }
    //         }],
    //     });

    //     render(<Wishlist />)
    //    const btn = screen.getByRole('button')
    //         console.log(btn);
        
    // })

    // it("check dispatch called?", () => {
    //     render(<Wishlist />)
    //     const btn = screen.getByRole('button')
    //     console.log(btn);
    //     // userEvent.click(btn)

    //     // expect(useAppDispatch).toHaveBeenCalled()
    //     // expect(useAppDispatch).toHaveBeenCalledWith()
    // })

//     it("check initial state", () => {
//     const listSliceInit = wishlistSlice(initialState, { type:'unknown' });
//     expect(listSliceInit).toBe(initialState);
//   });
});

// test('first test case', () => {
//     const data = 5;
//     expect(data).toBe(5);
// })

// test('Wishlist heading rendering properly', () => {
//     console.log(render(<Wishlist />), { wrapper: ReduxWrapper },)

//     // const textContent = screen.getByText('hello')
//     // expect(textContent).toBeInTheDocument();
// })

