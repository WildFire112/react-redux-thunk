import React from 'react';
import './styles/App.css';
import AuthContainer from '../src/components/Auth/AuthContainer'
import RegistrationContainer from '../src/components/Registration/RegistrationContainer'


function App() {
  return (
    <div className="container">
      <h1>Complex State</h1>
      <div className="sign-container">
        <AuthContainer />
        <RegistrationContainer />
      </div>
    </div>
  );
}

export default App;
