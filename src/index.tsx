import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { reportWebVitals } from './reportWebVitals'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { breakpoints } from './breakpoints'

const theme = extendTheme({ breakpoints: createBreakpoints(breakpoints) })

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
