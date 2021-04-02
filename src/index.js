import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(<App title={title} />, document.getElementById('app'));

module.hot.accept();
