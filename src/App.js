import React from 'react';
import './styles/App.css';
import AuthContainer from '../src/components/Auth/AuthContainer'
import RegistrationContainer from '../src/components/Registration/RegistrationContainer'
import TestContainer from './components/Test/TestContainer';


function App() {
  return (
    <div className="container">
      <h1>Redux test</h1>
      <div className="sign-container">
        <AuthContainer />
        <RegistrationContainer />
      </div>
      <TestContainer />
    </div>
  );
}

export default App;
