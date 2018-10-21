import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
   
  }
  

  render() {
  const {brand} = this.props;

    return (
      <div>
        { brand && 
          <h6>
                Be Your Own Brand
          </h6>
        }
        <div className="footer">
            

            <span>Scrolit Copyright 2018 - Privacy Policy - Contact</span>
        </div>
      </div>

    );
  }
}

export default Footer;
