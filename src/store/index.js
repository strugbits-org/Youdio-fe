import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counterReducer from 'src/features/userSlice'
import languageReducer from 'src/features/language'

export const rootReducer = combineReducers({
  counter: counterReducer,
  language: languageReducer,
});
const persistConfig = {
    key: 'root',
    storage
}

const persitedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persitedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
})
const persistor = persistStore(store)

export {
    store,
    persistor
}