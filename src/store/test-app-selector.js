import { STATUSES } from "./productSlice"

const state = {
    cart: [],
    wishlist: [],
    data: [],
    status:STATUSES.LOADING
}

export const testUseAppSelector=(f)=>f(state)