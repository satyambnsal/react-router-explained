import React from 'react';
import MainPage from './components/MainPage.jsx';

const App = ({ title }) => (
  <div>
    {title}
    <MainPage />
  </div>
);

export default App;
