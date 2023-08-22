import page from '@/app/dashboard/page'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export enum CustomerStatus {
  Active = 'ativo',
  Inactive = 'inativo',
  Waiting = 'aguardando ativação',
  Disabled = 'desativado',
}

export interface Customer {
  id: string
  name: string
  email: string
  document: string
  phone: string
  status: CustomerStatus
  createdAt: string
  updatedAt: string
}

export interface GetCustomersRequest {
  page?: number
  quantity?: number
}

export interface GetCustomersResponse {
  customers: Customer[]
  page: number
  quantity: number
  total: number
}

export interface GetCustomerRequest {
  id: string
}

export interface GetCustomerResponse {
  customer: Customer
}

export interface CreateCustomerRequest {
  name: string
  email: string
  document: string
  phone: string
  status: CustomerStatus
}

export interface UpdateCustomerRequest {
  id: string
  name?: string
  email?: string
  document?: string
  phone?: string
  status?: CustomerStatus
}

export interface CustomerState {
  isLoading: boolean
  error: AxiosError | null
  // GET ALL
  customers?: Customer[]
  page?: number
  quantity?: number
  total?: number
  // GET BY ID
  customer?: Customer
}

export const customerState: CustomerState = {
  isLoading: false,
  error: null,
  customers: undefined,
  page: undefined,
  quantity: undefined,
  total: undefined,
  customer: undefined,
}

const customerSlice = createSlice({
  name: 'customer',
  initialState: customerState,
  reducers: {
    GET_CUSTOMERS: (state, _: PayloadAction<GetCustomersRequest>) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    GET_CUSTOMERS_SUCCESS: (
      state,
      { payload }: PayloadAction<GetCustomersResponse>,
    ) => ({
      ...state,
      isLoading: false,
      error: null,
      customers: payload.customers,
      page: payload.page,
      quantity: payload.quantity,
      total: payload.total,
    }),
    GET_CUSTOMERS_FAILURE: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error,
    }),
    PREV_CUSTOMER_PAGE: (state) => ({
      ...state,
      page: (state.page ?? 0) <= 1 ? state.page : (state.page ?? 1) - 1,
    }),
    NEXT_CUSTOMER_PAGE: (state) => ({
      ...state,
      page:
        (state.page ?? 0) * 10 >= (state.total ?? 0)
          ? state.page
          : (state.page ?? 0) + 1,
    }),
    GET_CUSTOMER: (state, _: PayloadAction<GetCustomerRequest>) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    GET_CUSTOMER_SUCCESS: (
      state,
      { payload }: PayloadAction<GetCustomerResponse>,
    ) => ({
      ...state,
      isLoading: false,
      error: null,
      customer: payload.customer,
    }),
    GET_CUSTOMER_FAILURE: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error,
    }),
    CREATE_CUSTOMER: (state, _: PayloadAction<CreateCustomerRequest>) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    CREATE_CUSTOMER_SUCCESS: (state) => ({
      ...state,
      isLoading: false,
      error: null,
    }),
    CREATE_CUSTOMER_FAILURE: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error,
    }),
    UPDATE_CUSTOMER: (state, _: PayloadAction<UpdateCustomerRequest>) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    UPDATE_CUSTOMER_SUCCESS: (state) => ({
      ...state,
      isLoading: false,
      error: null,
    }),
    UPDATE_CUSTOMER_FAILURE: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error,
    }),
  },
})

const { actions, reducer } = customerSlice

export const {
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_FAILURE,
  CREATE_CUSTOMER_SUCCESS,
  PREV_CUSTOMER_PAGE,
  NEXT_CUSTOMER_PAGE,
  GET_CUSTOMERS,
  GET_CUSTOMERS_FAILURE,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMER,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER,
  UPDATE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_SUCCESS,
} = actions

export default reducer
