import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from './context/context';
import {SpeechProvider} from '@speechly/react-client';
import './index.css';


ReactDOM.render(
  <SpeechProvider appId="ab3f7766-5f01-4453-a354-5723fb471494" language="en-US">
    <Provider>
    <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);

