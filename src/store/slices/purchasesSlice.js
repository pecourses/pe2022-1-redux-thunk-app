import { createSlice } from '@reduxjs/toolkit'

const PURCHASES_SLICE_NAME = 'purchases'

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
