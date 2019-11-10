import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App.jsx';

const init = () => {
  ReactDOM.render(
    <App mistakes={10} time={20} />,
    document.querySelector(`#root`),
  );
};

init();
