import { configureStore } from 'redux'
import reducers  from "./reducers/index";

const store = configureStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

