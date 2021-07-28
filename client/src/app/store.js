import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './../features/comments/commentSlice'
export default configureStore({
  reducer: {
    counter : counterReducer
  },
})