import { api } from '@/lib/axios'
import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { takeLatest, all, put, call } from 'redux-saga/effects'
import {
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_FAILURE,
  CREATE_CUSTOMER_SUCCESS,
  GET_CUSTOMERS,
  GET_CUSTOMERS_FAILURE,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMER,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER,
  UPDATE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_SUCCESS,
  CreateCustomerRequest,
  GetCustomersResponse,
  GetCustomersRequest,
  GetCustomerRequest,
  GetCustomerResponse,
  UpdateCustomerRequest,
} from '../slices/customer.slice'
import { toast } from 'react-hot-toast'

export function* getCustomers({
  payload: { page = 1, quantity = 10 },
}: PayloadAction<GetCustomersRequest>) {
  try {
    const { data }: AxiosResponse<GetCustomersResponse> = yield call(
      api.get,
      '/customer/',
      { params: { page, quantity } },
    )

    yield put(GET_CUSTOMERS_SUCCESS(data))
  } catch (error) {
    yield put(GET_CUSTOMERS_FAILURE({ error }))
  }
}

export function* getCustomer({
  payload: { id },
}: PayloadAction<GetCustomerRequest>) {
  try {
    const { data }: AxiosResponse<GetCustomerResponse> = yield call(
      api.get,
      `/customer/${id}`,
    )

    yield put(GET_CUSTOMER_SUCCESS(data))
  } catch (error) {
    yield put(GET_CUSTOMER_FAILURE({ error }))
  }
}

export function* createCustomer({
  payload,
}: PayloadAction<CreateCustomerRequest>) {
  try {
    yield call(api.post, `/customer/`, payload)
    toast.success('Cliente criado com successo!')
    yield put(CREATE_CUSTOMER_SUCCESS())
  } catch (error) {
    toast.error('Algo deu errado, tente novamente')
    yield put(CREATE_CUSTOMER_FAILURE({ error }))
  }
}

export function* updateCustomer({
  payload: { id, document, email, name, phone, status },
}: PayloadAction<UpdateCustomerRequest>) {
  try {
    yield call(api.put, `/customer/${id}`, {
      document,
      email,
      name,
      phone,
      status,
    })

    toast.success('Cliente atualizado com successo!')
    yield put(UPDATE_CUSTOMER_SUCCESS())
  } catch (error) {
    toast.error('Algo deu errado, tente novamente')
    yield put(UPDATE_CUSTOMER_FAILURE({ error }))
  }
}

export default function* watcher() {
  yield all([
    takeLatest(GET_CUSTOMERS, getCustomers),
    takeLatest(GET_CUSTOMER, getCustomer),
    takeLatest(CREATE_CUSTOMER, createCustomer),
    takeLatest(UPDATE_CUSTOMER, updateCustomer),
  ])
}
