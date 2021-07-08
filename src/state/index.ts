import createSagaMiddleware from 'redux-saga';
import persistedReducer from './rootReducer';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [
	sagaMiddleware,
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
];

const index = configureStore({
	reducer: persistedReducer,
	middleware: middleware,
});

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof index.getState>
export type AppDispatch = typeof index.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const persistor = persistStore(index);

export default index;