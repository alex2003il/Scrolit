import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import routes from './routes';

export default class App extends Component {
  state = { username: null };
  

  showContentMenu = (routes) => {
    var result = null;
    if(routes.length>0){
      result = routes.map((route,index)=>{
        return (
          <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return result;
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }
  

  render() {
    const { username } = this.state;
    return (
      <Fragment>
      
      <Router>
        <div>
          <div className="main">
            <Switch>
              { this.showContentMenu(routes) }
            </Switch>
          </div>
        </div>
      </Router>
    </Fragment>
    );
  }
}
