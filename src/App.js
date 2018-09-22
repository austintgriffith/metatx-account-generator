import React, { Component } from 'react';
import cookie from 'react-cookies'
import Web3 from 'web3';
class App extends Component {
  componentDidMount(){
    window.web3 = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws'))
    let privateKey = cookie.load('metaPrivateKey')
    if(!privateKey){
      let metaAccountCookie = window.web3.eth.accounts.create();
      console.log("GENERATED",metaAccountCookie)
      const expires = new Date()
      expires.setDate(expires.getDate() + 365)
      cookie.save('metaPrivateKey', metaAccountCookie.privateKey, { path: '/',expires})
      privateKey = metaAccountCookie.privateKey
    }
    console.log("Private Key:",privateKey)
    if(document.referrer.indexOf("metatx.io")>=0){
      //do nothing
    }else{
      window.location = document.referrer+"?privateKey="+privateKey
    }

  }
  render() {
    return (
      <div className="App">
        Generating Ethereum Account...
      </div>
    );
  }
}

export default App;
