import React, { Component } from 'react';
import './ImagePage.css';
import {Footer} from '../../';

class ImagePage extends Component {
  constructor(props) {
    super(props);
    this.closeMe = this.closeMe.bind(this);
    this.state = {
      open:true,
    };
  }
  closeMe()
  {
    const {closeFunc} = this.props;
    this.setState({
      open:false
    })
    if (closeFunc)
    {
      closeFunc();
    }
  }


  render() {
    const { image, description ,name , avatar} = this.props;
    if (this.state.open)
    /*
    return (
      <div >
      
        <img className="insta_img" src={image} alt="react" />
        
        <div className="insta_bottom">
          <h2> {description}</h2>
          <button onClick={this.closeMe}>
                  Close
            </button>
        </div>
      </div>
    
    )*/
    return (
      <div className="Post" ref="Post">
      <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src={avatar}  />
                </div>
                <div className="Post-user-nickname">
                  <span>{name}</span>
                </div>
                <button className="close-button" onClick={this.closeMe}>
                  X
                </button>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src={image} />
              </div>
            </div>
            <div className="Post-caption-comment" >
              <div className="Post-caption">
                {description}
              </div>
              <div className="Post-comments-container">
                <span className="Post-comment"> Comment1: {description} </span>
                <span className="Post-comment"> Comment2: {description} </span>
                <span className="Post-comment"> Comment3: {description} </span>
              </div>
            </div>
            <Footer brand={false}/>
          </div>
    );
    else{
      return (
        <div/>
      )

      
    }
  }
}

export default ImagePage;
