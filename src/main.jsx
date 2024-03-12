import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import store from './app/store.js'
import {Provider} from "react-redux"
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
      <CSSReset />
        <App />
   
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
)
