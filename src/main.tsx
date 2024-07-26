import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ServicesProvider from './services/provider'
import './index.css'
import Services from './services'

const servicesManager = new Services();
// Через services получаем доступ к store, api, i18n и всем другим сервисам
const services = await servicesManager.init();

const Root = () => {
  return <ServicesProvider services={services}><App /></ServicesProvider>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
