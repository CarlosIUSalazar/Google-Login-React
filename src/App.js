import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props)

  insertGapiScript(){
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => {
      this.initializeGoogleSignIn()
    }
    document.body.appendChild(script)
  }

  initializeGoogleSignIn(){
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id:'223030327474-qogpjta47euso8n21g0q4cdhmv49gl3i.apps.googleusercontent.com'
      })
      console.log('Api inited')
  
      window.gapi.load('signin2',() => {
        const params = {
          onsuccess: () => {
            console.log('user has finished signing in!')
          }
        }
        window.gapi.signin2.render('loginButton', params)
      })
    })
  }

  componentDidMount(){
    console.log('Loading')
    this.insertGapiScript();
  }

  render() {
  return (
    <div className="App">
      <h1>Google Login Demo</h1>
      <div id="loginButton">Sign in with Google</div>
    </div>
  );
}
}
export default App;
