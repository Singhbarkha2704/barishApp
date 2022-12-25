import reducer, {
    initialState,
    fetchProductData
  } from "./../store/productSlice";
  import {
  mockNetWorkResponse,
    getListOfProducts
  } from "../utils/tests.data.js";
import {store} from '../store/store'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

  describe("List all products", () => {
    beforeAll(() => {
      mockNetWorkResponse();
    });

    it("Should be able to fetch the product list", async () => {
      const result = await store.dispatch(fetchProductData());
      // console.log(result,"result");
      const products = result.payload;

      expect(result.type).toBe("products/fetch/fulfilled");
      expect(products).toEqual(getListOfProducts);
      const state = store.getState().product;
      // console.log(state);
      expect(state.data).toEqual(getListOfProducts);
    });
  });