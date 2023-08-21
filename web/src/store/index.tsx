import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import customerReducer from './slices/customer.slice'
import customerSaga from './sagas/customer.saga'

export const reducers = combineReducers({
  customer: customerReducer,
})

export function* sagas() {
  yield all([customerSaga()])
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
