import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './../features/comments/commentSlice'
import { shadnakApi } from '../services/shadnakapi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
 const store =  configureStore({
  reducer: {
    counter : counterReducer,
    [shadnakApi.reducerPath]:shadnakApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shadnakApi.middleware),
})
setupListeners(store.dispatch)
export default store