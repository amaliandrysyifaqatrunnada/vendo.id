import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/index.css' // Pastikan nama file css di folder styles sesuai

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
