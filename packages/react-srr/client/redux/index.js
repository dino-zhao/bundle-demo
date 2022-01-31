import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./users/users.reducer";

export default function createStoreWithInitial(initial) {
  return createStore(userReducer, initial, applyMiddleware(thunk));
}
