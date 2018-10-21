import React, { Component } from 'react';
import './Home.css';
import scrolitLogo from '../../img/logo.svg';

class Home extends Component {
  onButtonClick()
  {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: 'AlexUser',
        password: 'AlexPassword',
      })
    })
  }

  onFetchUserData()
  {
    fetch('/api/getUserData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: 'Alex',
      })
    }).then(response => {
      console.log("Response is : ",response)
      return response.json();
    })
    .then( body => 
      console.log("Got the following response: ",body)
    )
    .catch(error => {
          console.log("Got the following error: ",error)
      });

    
  }


  render() {
    const { classes } = this.props;
    return (
      <div style={{width:'80%' , flex:1, flexDirection: 'column',marginTop:'40px'}}>
        <img src={scrolitLogo} alt="react" />
         <h1>Welcome to Scrolit</h1>
         <div style={{ flexDirection: 'column',marginTop:'20px'}}>
            <button onClick={this.onButtonClick}>
              Login
            </button>
            <button onClick={this.onFetchUserData}>
              Fetch Data
        </button>
        </div>
      </div>
    );
  }
}

export default Home;
