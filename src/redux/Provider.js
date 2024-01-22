'use client'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import store from './Store'

const Provider = ({children}) => {
  return (
    <ReduxProvider store={store}>
        {children}
    </ReduxProvider>
  )
}

export default Provider
