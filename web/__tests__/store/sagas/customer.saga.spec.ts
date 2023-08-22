import { api } from '@/lib/axios'
import { runSaga, Saga } from 'redux-saga'
import {
  createCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} from '@/store/sagas/customer.saga'
import {
  CREATE_CUSTOMER_FAILURE,
  CREATE_CUSTOMER_SUCCESS,
  CreateCustomerRequest,
  CustomerStatus,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMERS,
  GET_CUSTOMERS_FAILURE,
  GET_CUSTOMERS_SUCCESS,
  GetCustomerRequest,
  GetCustomerResponse,
  GetCustomersRequest,
  GetCustomersResponse,
  UPDATE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_SUCCESS,
  UpdateCustomerRequest,
} from '@/store/slices/customer.slice'

export const returnCustomersSuccess: { data: GetCustomersResponse } = {
  data: {
    customers: [
      {
        id: '1',
        name: 'ronaldinho',
        document: '123.456.789.01',
        email: 'ronaldinho@email.com',
        phone: '+55 11 999999999',
        status: CustomerStatus.Active,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '2',
        name: 'ronaldo fenomeno',
        document: '123.456.789.02',
        email: 'ronaldo@email.com',
        phone: '+55 11 888888888',
        status: CustomerStatus.Inactive,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    page: 1,
    quantity: 10,
    total: 2,
  },
}

export const returnCustomerSuccess: { data: GetCustomerResponse } = {
  data: {
    customer: {
      id: '1',
      name: 'ronaldinho',
      document: '00000000000',
      email: 'ronaldinho@example.com',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  },
}

export const createCustomerRequest: CreateCustomerRequest = {
  name: 'ronaldinho',
  document: '00000000000',
  email: 'ronaldinho@example.com',
  phone: '+55 11 999999999',
  status: CustomerStatus.Active,
}

export const updateCustomerRequest: UpdateCustomerRequest = {
  id: '1',
  name: 'ronaldinho',
  document: '00000000000',
  email: 'ronaldinho@example.com',
  phone: '+55 11 999999999',
  status: CustomerStatus.Active,
}

export const returnFailed = { statusCode: 401, message: 'unauthorized' }

describe('customer saga', () => {
  it('should return customers', async () => {
    const get = api.get as jest.Mock
    const dispatchedAction: unknown[] = []

    get.mockReturnValue(returnCustomersSuccess)

    await runSaga(
      { dispatch: (action) => dispatchedAction.push(action) },
      getCustomers as Saga,
      { payload: { page: 1, quantity: 10 } },
    ).toPromise()

    expect(api.get).toHaveBeenCalledWith('/customer/', {
      params: {
        page: 1,
        quantity: 10,
      },
    })

    expect(dispatchedAction).toContainEqual(
      GET_CUSTOMERS_SUCCESS({ ...returnCustomersSuccess.data }),
    )
  })

  it('should not return customers', async () => {
    const get = api.get as jest.Mock
    const dispatchedAction: unknown[] = []

    get.mockRejectedValueOnce(returnFailed)

    await runSaga(
      { dispatch: (action) => dispatchedAction.push(action) },
      getCustomers as Saga,
      { payload: { page: 1, quantity: 10 } },
    ).toPromise()

    expect(api.get).toHaveBeenCalledWith('/customer/', {
      params: {
        page: 1,
        quantity: 10,
      },
    })

    expect(dispatchedAction).toContainEqual(
      GET_CUSTOMERS_FAILURE({ error: returnFailed }),
    )
  })

  it('should return customer by id', async () => {
    const get = api.get as jest.Mock
    const dispatchedAction: unknown[] = []

    get.mockReturnValue(returnCustomerSuccess)

    await runSaga(
      { dispatch: (action) => dispatchedAction.push(action) },
      getCustomer as Saga,
      { payload: { id: '1' } },
    ).toPromise()

    expect(api.get).toHaveBeenCalledWith('/customer/1')

    expect(dispatchedAction).toContainEqual(
      GET_CUSTOMER_SUCCESS({ ...returnCustomerSuccess.data }),
    )
  })

  it('should not return customers by id', async () => {
    const get = api.get as jest.Mock
    const dispatchedAction: unknown[] = []

    get.mockRejectedValueOnce(returnFailed)

    await runSaga(
      { dispatch: (action) => dispatchedAction.push(action) },
      getCustomer as Saga,
      { payload: { id: '1' } },
    ).toPromise()

    expect(api.get).toHaveBeenCalledWith('/customer/1')

    expect(dispatchedAction).toContainEqual(
      GET_CUSTOMER_FAILURE({ error: returnFailed }),
    )
  })

  it('should create a new customer', async () => {
    const dispatchedAction: unknown[] = []

    await runSaga(
      { dispatch: (action) => dispatchedAction.push(action) },
      createCustomer as Saga,
      { payload: createCustomerRequest },
    ).toPromise()

    expect(api.post).toHaveBeenCalledWith('/customer/', createCustomerRequest)
    expect(dispatchedAction).toContainEqual(CREATE_CUSTOMER_SUCCESS())
  })

  it('should not create a new customer', async () => {
    const post = api.post as jest.Mock
    const dispatchedAction: unknown[] = []

    post.mockRejectedValueOnce(returnFailed)

    await runSaga(
      { dispatch: (action) => dispatchedAction.push(action) },
      createCustomer as Saga,
      { payload: createCustomerRequest },
    ).toPromise()

    expect(api.post).toHaveBeenCalledWith('/customer/', createCustomerRequest)
    expect(dispatchedAction).toContainEqual(
      CREATE_CUSTOMER_FAILURE({ error: returnFailed }),
    )
  })

  it('should update a customer', async () => {
    const dispatchedAction: unknown[] = []

    await runSaga(
      { dispatch: (action) => dispatchedAction.push(action) },
      updateCustomer as Saga,
      { payload: updateCustomerRequest },
    ).toPromise()

    expect(api.put).toHaveBeenCalledWith(
      `/customer/${updateCustomerRequest.id}`,
      {
        name: updateCustomerRequest.name,
        email: updateCustomerRequest.email,
        document: updateCustomerRequest.document,
        phone: updateCustomerRequest.phone,
        status: updateCustomerRequest.status,
      },
    )
    expect(dispatchedAction).toContainEqual(UPDATE_CUSTOMER_SUCCESS())
  })

  it('should not update a customer', async () => {
    const put = api.put as jest.Mock
    const dispatchedAction: unknown[] = []

    put.mockRejectedValueOnce(returnFailed)

    await runSaga(
      { dispatch: (action) => dispatchedAction.push(action) },
      updateCustomer as Saga,
      { payload: updateCustomerRequest },
    ).toPromise()

    expect(api.put).toHaveBeenCalledWith(
      `/customer/${updateCustomerRequest.id}`,
      {
        name: updateCustomerRequest.name,
        email: updateCustomerRequest.email,
        document: updateCustomerRequest.document,
        phone: updateCustomerRequest.phone,
        status: updateCustomerRequest.status,
      },
    )
    expect(dispatchedAction).toContainEqual(
      UPDATE_CUSTOMER_FAILURE({ error: returnFailed }),
    )
  })
})
