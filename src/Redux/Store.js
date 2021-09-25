import { createStore } from "redux";
import rootReducer from "../Reducers/Reducer";

// let initialStore = {
//   reminders: [],
// };

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
