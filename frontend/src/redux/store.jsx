import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

// Persisiting store 
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux'
import {persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,persistStore} from 'redux-persist';


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const reducers  = combineReducers({cart : cartReducer})

const persistedReducer = persistReducer(persistConfig, reducers) 


export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
 
})