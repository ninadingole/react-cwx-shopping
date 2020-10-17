import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { persistor, store };


