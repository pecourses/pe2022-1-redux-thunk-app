import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createNewPurchase } from '../../api'

const PURCHASES_SLICE_NAME = 'purchases'

export const createPurchase = createAsyncThunk(
  `purchases/create`,
  async (values, thunkAPI) => {
    try {
      console.log('values :>> ', values)
      const response = await createNewPurchase(values)
      console.log('response :>> ', response)
    } catch (e) {
      console.log('e :>> ', e)
    }
  }
)

const purchasesSlice = createSlice({
  name: PURCHASES_SLICE_NAME,
  initialState: {
    purchases: [],
    isFetching: false,
    error: null
  },
  reducers: {}
})

const { reducer, actions } = purchasesSlice

export const {} = actions

export default reducer
