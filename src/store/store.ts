import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { logger } from 'redux-logger';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'; 

import { rootSaga } from './root.saga';
import { rootReducer } from './root.reducer';

// const logger = (store) => (next) => (action) => {
//     if(!action.type) return next(action);

//     console.log("type: ", action.type);
//     console.log("payload: ", action.payload);
//     console.log("current state: ", store.getState());

//     next(action);
//     console.log("next state: ", store.getState());
// }

export type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter((middleware): middleware is Middleware => Boolean(middleware));

export type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[];
}

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
  );

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

