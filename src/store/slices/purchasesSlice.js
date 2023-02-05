import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as API from '../../api'

const PURCHASES_SLICE_NAME = 'purchases'

export const createPurchase = createAsyncThunk(
  `purchases/create`,
  async (values, thunkAPI) => {
    try {
      const response = await API.createNewPurchase(values)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const getPurchases = createAsyncThunk(
  `${PURCHASES_SLICE_NAME}/get`,
  async (payload, thunkAPI) => {
    try {
      const response = await API.getPurchases()
      console.log('response :>> ', response)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
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
  reducers: {},
  extraReducers: builder => {
    // CREATE
    builder.addCase(createPurchase.pending, state => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(createPurchase.fulfilled, (state, action) => {
      state.purchases.push(action.payload)
      state.isFetching = false
    }) // action.payload = response.data
    builder.addCase(createPurchase.rejected, (state, action) => {
      state.error = action.payload
      state.isFetching = false
    })
    // GET
  }
})

const { reducer, actions } = purchasesSlice

export const {} = actions

export default reducer
