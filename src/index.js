import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import { ErrorBoundary } from 'react-error-boundary'

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
)
