import { Status } from '@/enum';
import { api } from '@/services/api';
import {
  CustomerStoreTypes,
  CustomerTypes,
  ErrorCallbackTypes,
  FormDataTypes,
} from '@/types';
import { Dispatch, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Redux {
  dispatch: Dispatch<any>;
}

const initialState: CustomerStoreTypes = {
  data: [],
  customerToUpdate: {
    id: 0,
    name: '',
    email: '',
    taxId: '',
    phone: '',
    status: Status.WAITING_FOR_ACTIVATION,
  },
  created: false,
  updated: false,
};

export const successCreate = createAsyncThunk(
  'customers/successCreate',
  async (success: boolean) => {
    return success;
  }
);

export const successUpdate = createAsyncThunk(
  'customers/successUpdate',
  async (success: boolean) => {
    return success;
  }
);

export const createCustomer = createAsyncThunk(
  'customers/createCustomer',
  async (
    {
      formData,
      errorCallback,
    }: {
      formData: FormDataTypes;
      errorCallback?: ErrorCallbackTypes;
    },
    { dispatch }: Redux
  ) => {
    try {
      dispatch(successCreate(false));

      await api.post('/customers', formData);

      dispatch(successCreate(true));
      alert('Cliente cadastrado(a) com sucesso!');
    } catch (e: any) {
      if (errorCallback) {
        if (String(e.response.data.error).includes('email')) {
          errorCallback(1);
        } else {
          errorCallback(2);
        }
      }
    }
  }
);

export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async () => {
    const response = await api.get('/customers');

    return response.data;
  }
);

export const fetchCustomerById = createAsyncThunk(
  'customers/fetchCustomerById',
  async (customerId: number) => {
    const response = await api.get(`/customers/${customerId}`);

    return response.data;
  }
);

export const updateCustomer = createAsyncThunk(
  'customers/updateCustomer',
  async (
    {
      formData,
      errorCallback,
    }: {
      formData: CustomerTypes;
      errorCallback?: ErrorCallbackTypes;
    },
    { dispatch }: Redux
  ) => {
    try {
      dispatch(successUpdate(false));
      console.log({ formData });

      const { id, name, email, taxId, phone, status } = formData;

      await api.patch(`/customers/${id}`, {
        name,
        email,
        taxId,
        phone,
        status,
      });

      dispatch(successUpdate(true));
      alert('Cliente atualizado(a) com sucesso!');
    } catch (e: any) {
      if (errorCallback) {
        if (String(e.response.data.error).includes('email')) {
          errorCallback(1);
        } else {
          errorCallback(2);
        }
      }
    }
  }
);

export const disableCustomer = createAsyncThunk(
  'customers/disableCustomer',
  async (id: string) => {
    const response = await api.delete(`/customers/${id}`);

    return response.data;
  }
);

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(fetchCustomerById.fulfilled, (state, action) => {
      state.customerToUpdate = action.payload;
    });

    builder.addCase(successCreate.fulfilled, (state, action) => {
      state.created = action.payload;
    });

    builder.addCase(successUpdate.fulfilled, (state, action) => {
      state.updated = action.payload;
    });
  },
});

export default customersSlice.reducer;
