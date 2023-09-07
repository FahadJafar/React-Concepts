import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Counter';
import storage  from "redux-persist/lib/storage";
import { persistReducer} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";


const PersistConfig={
    key:"root",
    verson:1,
   storage:storage,
  blacklist: ['count'] 
}
const reducer=combineReducers({
    counter:counterReducer,
})
const persistedReducer1 = persistReducer(PersistConfig,reducer);

export default configureStore({
    reducer:persistedReducer1

});