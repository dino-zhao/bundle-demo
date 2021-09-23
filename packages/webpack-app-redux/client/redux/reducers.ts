import counterReducer from './countSlice'
import { pokemonApi } from '../services/pokemon'
import { combineReducers } from '@reduxjs/toolkit'
import { booksSlice } from './bookSlice'
export default combineReducers({
  counter: counterReducer,
  books: booksSlice.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
})
