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
      return thunkAPI.rejectWithValue({ message: e.message })
    }
  }
)

export const getPurchases = createAsyncThunk(
  `${PURCHASES_SLICE_NAME}/get`,
  async (payload, thunkAPI) => {
    try {
      const response = await API.getPurchases()
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message })
    }
  }
)

export const deletePurchase = createAsyncThunk(
  `${PURCHASES_SLICE_NAME}/delete`,
  async (payload, thunkAPI) => {
    try {
      await API.deletePurchase(payload)
      return payload
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message })
    }
  }
)

export const updatePurchase = createAsyncThunk(
  `${PURCHASES_SLICE_NAME}/update`,
  async ({ id, values }, thunkAPI) => {
    try {
      const response = await API.updatePurchase(id, values)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message })
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
    builder.addCase(getPurchases.pending, (state, action) => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(getPurchases.fulfilled, (state, action) => {
      state.purchases.push(...action.payload)
      state.isFetching = false
    })
    builder.addCase(getPurchases.rejected, (state, action) => {
      state.error = action.payload
      state.isFetching = false
    })
    // DELETE
    builder.addCase(deletePurchase.pending, state => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(deletePurchase.fulfilled, (state, action) => {
      state.purchases = state.purchases.filter(p => p.id !== action.payload)
      state.isFetching = false
    })
    builder.addCase(deletePurchase.rejected, (state, action) => {
      state.error = action.payload
      state.isFetching = false
    })
    // UPDATE
    builder.addCase(updatePurchase.pending, state => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(updatePurchase.fulfilled, (state, action) => {
      const foundIndex = state.purchases.findIndex(
        p => p.id === action.payload.id
      )
      state.purchases[foundIndex] = action.payload
      state.isFetching = false
    })
    builder.addCase(updatePurchase.rejected, (state, action) => {
      state.error = action.payload
      state.isFetching = false
    })
  }
})

const { reducer, actions } = purchasesSlice

export const {} = actions

export default reducer
