import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';

function App() {
  const responseFacebook = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <FacebookLogin
        appId="178419416718602"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <button>Fb</button>
    </div>
  );
}

export default App;
