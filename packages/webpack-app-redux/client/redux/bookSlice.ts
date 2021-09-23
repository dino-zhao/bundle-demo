import { createEntityAdapter, createSlice, EntityState } from '@reduxjs/toolkit'

type Book = { id: string; title: string }
interface State {
  books: EntityState<Book>
}

const booksAdapter = createEntityAdapter<Book>({
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.title.localeCompare(b.title),
})

export const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState({
    loading: false,
  }),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    bookAdded: booksAdapter.addOne,
    booksReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      state.loading = false
      booksAdapter.addMany(state, action.payload)
    },
    booksLoading(state) {
      // Can update the additional state field
      state.loading = true
    },
    bookUpdated: booksAdapter.updateOne,
  },
})
export const bookAction = booksSlice.actions
export const simpleSelectors = booksAdapter.getSelectors()

export const { selectById: selectBookById } = booksAdapter.getSelectors(
  (state: State) => {
    console.log('test322')
    return state.books
  }
)
