'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'
import { store } from '@/store/index'
import { Provider as ReduxProvider } from 'react-redux'

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ReduxProvider store={store}>
      {children}
      <Toaster position="top-right" />
    </ReduxProvider>
  )
}

export default Providers
