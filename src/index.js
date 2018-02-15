import React from 'react';
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import GridExampleStretched from './gridExampleStretched';
import { IntlProvider, addLocaleData  } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';
import './test.css';

addLocaleData([...pt, ...en]);

const App = () => (
  <div className='mainAppHolderStyle'>
    <IntlProvider locale="en">
      <GridExampleStretched />
    </IntlProvider>      
  </div>
);

render(<App />, document.getElementById('root'));