import reducer, {
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_FAILURE,
  CREATE_CUSTOMER_SUCCESS,
  GET_CUSTOMER,
  GET_CUSTOMERS,
  GET_CUSTOMERS_FAILURE,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_SUCCESS,
  NEXT_CUSTOMER_PAGE,
  PREV_CUSTOMER_PAGE,
  UPDATE_CUSTOMER,
  UPDATE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_SUCCESS,
} from '@/store/slices/customer.slice'
import {
  createCustomerRequest,
  returnCustomerSuccess,
  returnCustomersSuccess,
  updateCustomerRequest,
} from '../sagas/customer.saga.spec'

describe('customer slice', () => {
  test('should return the initial state', () => {
    const reducerInitial = reducer(undefined, { type: undefined })

    expect(reducerInitial).toEqual({
      isLoading: false,
      error: null,
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle GET_CUSTOMERS', () => {
    const reducerGetCustomer = reducer(
      undefined,
      GET_CUSTOMERS({ page: 1, quantity: 10 }),
    )

    expect(reducerGetCustomer).toEqual({
      isLoading: true,
      error: null,
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle GET_CUSTOMERS_SUCCESS', () => {
    const reducerGetCustomerSuccess = reducer(
      undefined,
      GET_CUSTOMERS_SUCCESS({ ...returnCustomersSuccess.data }),
    )

    expect(reducerGetCustomerSuccess).toEqual({
      isLoading: false,
      error: null,
      customers: returnCustomersSuccess.data.customers,
      page: returnCustomersSuccess.data.page,
      quantity: returnCustomersSuccess.data.quantity,
      total: returnCustomersSuccess.data.total,
      customer: undefined,
    })
  })

  test('should handle GET_CUSTOMERS_FAILURE', () => {
    const reducerGetCustomersFailure = reducer(
      undefined,
      GET_CUSTOMERS_FAILURE({ error: 'something went wrong' }),
    )

    expect(reducerGetCustomersFailure).toEqual({
      isLoading: false,
      error: 'something went wrong',
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle PREV_CUSTOMER_PAGE', () => {
    const reducerPrevCustomerState = reducer(undefined, PREV_CUSTOMER_PAGE())

    expect(reducerPrevCustomerState).toEqual({
      isLoading: false,
      error: null,
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle NEXT_CUSTOMER_PAGE', () => {
    const reducerNextCustomerState = reducer(undefined, NEXT_CUSTOMER_PAGE())

    expect(reducerNextCustomerState).toEqual({
      isLoading: false,
      error: null,
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle GET_CUSTOMER', () => {
    const reducerGetCustomer = reducer(undefined, GET_CUSTOMER({ id: '1' }))

    expect(reducerGetCustomer).toEqual({
      isLoading: true,
      error: null,
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle GET_CUSTOMER_SUCCESS', () => {
    const reducerGetCustomerSuccess = reducer(
      undefined,
      GET_CUSTOMER_SUCCESS({ ...returnCustomerSuccess.data }),
    )

    expect(reducerGetCustomerSuccess).toEqual({
      isLoading: false,
      error: null,
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: returnCustomerSuccess.data.customer,
    })
  })

  test('should handle GET_CUSTOMER_FAILURE', () => {
    const reducerGetCustomerFailure = reducer(
      undefined,
      GET_CUSTOMER_FAILURE({ error: 'something went wrong' }),
    )

    expect(reducerGetCustomerFailure).toEqual({
      isLoading: false,
      error: 'something went wrong',
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle CREATE_CUSTOMER', () => {
    const reducerCreateCustomer = reducer(
      undefined,
      CREATE_CUSTOMER(createCustomerRequest),
    )

    expect(reducerCreateCustomer).toEqual({
      isLoading: true,
      error: null,
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle CREATE_CUSTOMER_SUCCESS', () => {
    const reducerCreateCustomerSuccess = reducer(
      undefined,
      CREATE_CUSTOMER_SUCCESS(),
    )

    expect(reducerCreateCustomerSuccess).toEqual({
      isLoading: false,
      error: null,
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle CREATE_CUSTOMER_FAILURE', () => {
    const reducerCreateCustomerFailure = reducer(
      undefined,
      CREATE_CUSTOMER_FAILURE({ error: 'something went wrong' }),
    )

    expect(reducerCreateCustomerFailure).toEqual({
      isLoading: false,
      error: 'something went wrong',
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle UPDATE_CUSTOMER', () => {
    const reducerUpdateCustomer = reducer(
      undefined,
      UPDATE_CUSTOMER(updateCustomerRequest),
    )

    expect(reducerUpdateCustomer).toEqual({
      isLoading: true,
      error: null,
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle UPDATE_CUSTOMER_SUCCESS', () => {
    const reducerUpdateCustomerSuccess = reducer(
      undefined,
      UPDATE_CUSTOMER_SUCCESS(),
    )

    expect(reducerUpdateCustomerSuccess).toEqual({
      isLoading: false,
      error: null,
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })

  test('should handle UPDATE_CUSTOMER_FAILURE', () => {
    const reducerUpdateCustomerFailure = reducer(
      undefined,
      UPDATE_CUSTOMER_FAILURE({ error: 'something went wrong' }),
    )

    expect(reducerUpdateCustomerFailure).toEqual({
      isLoading: false,
      error: 'something went wrong',
      customers: undefined,
      page: undefined,
      quantity: undefined,
      total: undefined,
      customer: undefined,
    })
  })
})
