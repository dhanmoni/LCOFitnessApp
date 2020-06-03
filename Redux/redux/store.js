import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  timeout: null,
  key: 'primary',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
export const persistor = persistStore(store)


