import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./users/users.reducer";

export default function createStoreWithInitial(initial) {
  //避免服务端创建单例
  return createStore(userReducer, initial, applyMiddleware(thunk));
}
