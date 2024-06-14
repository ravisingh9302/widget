import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { defaultConfiguration } from './default_config.jsx'

if (window.attachEvent) {
  window.attachEvent('onload', injectChat);
} else {
  window.addEventListener('load', injectChat, false);
}

function injectChat() {
  if (!window.TelechatbotId) {
    console.error('Please set window.intergramId (see example at github.com/idoco/intergram)');
  }
  else {
    console.log("telechatbotId ", TelechatbotId)
    let root = document.createElement('div');
    root.id = 'TeleChatbot';
    document.getElementsByTagName('body')[0].appendChild(root);
    const server = window.TelechatbotServer || 'http://localhost:5174/';
    const iFrameSrc = server + '/index.html';
    const host = window.location.host || 'unknown-host';
    const configure = { ...defaultConfiguration, ...window.TelechatbotConfig };

    ReactDOM.createRoot(document.getElementById('TeleChatbot')).render(
      <React.StrictMode>
        <App TelechatbotId={window.TelechatbotId} host={host} iFrameSrc={iFrameSrc} configure={configure} />
      </React.StrictMode>,
    )
  }
}


