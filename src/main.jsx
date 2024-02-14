import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FormContextProvider } from './context/formContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormContextProvider>
    <>
    <App />
 
    </>
  </FormContextProvider>,
)


