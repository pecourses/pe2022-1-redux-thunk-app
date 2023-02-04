import { configureStore } from '@reduxjs/toolkit'
import purchasesReduces from './slices/purchasesSlice'

const store = configureStore({
  reducer: {
    purchasesData: purchasesReduces
  }
})

export default store
