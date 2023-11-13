import { createStore } from "redux";

import todoReducer from "./Reducer/todoReducer";

const store = createStore(todoReducer);

export default store;