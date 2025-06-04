'use client'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default function Providers({children}) {
  return (
    <div>
      <Provider store={store}>
        {children}
      </Provider>
    </div>
  )
}
