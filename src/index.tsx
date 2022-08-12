import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';

/*----- I18N -----*/
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <I18nextProvider i18n={i18next}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </I18nextProvider>,
);

