import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { reducers } from '@/store/index'

const wraperWithProvider = (children: ReactNode, mockedStore: object) => {
  const store = configureStore({
    reducer: reducers,
    preloadedState: mockedStore,
  })

  return <Provider store={store}>{children}</Provider>
}

export const renderWithProvider = (component: ReactNode, mockedStore = {}) => {
  return render(wraperWithProvider(component, mockedStore))
}
