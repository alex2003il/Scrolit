import React, { Component } from 'react';
import './UserPage.css';
import scrolitLogo from '../../img/logo.svg';
import Slider from "react-slick";
import {Footer} from '../';
import {ImagePage} from './Pages';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.onFetchUserData = this.onFetchUserData.bind(this);
    this.openImage=this.openImage.bind(this);
    this.closeImage=this.closeImage.bind(this);
    this.state = {
      subtitle:undefined,
      content:undefined,
      profilePic:undefined,
      images:undefined,
      loaded:false,
      image:undefined,
      desc:undefined
    };
  }

  onFetchUserData(userName)
  {
    console.log("onFetchUserData user is: ",userName);
    fetch('/api/getUserData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: userName,
      })
    }).then(response => {
      console.log("Response is : ",response)
      return response.json();
    })
    .then( body => {
        console.log("Got the following response: ",body);
        this.setState({
          subtitle: body.desc,
          content: body.content,
          profilePic: body.profilePic,
          images:body.images,
          loaded:true
        })
      }
    )
    .catch(error => {
          console.log("Got the following error: ",error)
      });

    
  }
  openImage(image,desc)
  {
    this.setState({
      image:image,
      desc:desc
    })
  }
  
  closeImage()
  {
    this.setState({
      image:undefined,
      desc:undefined
    })
  }


  render() {
    const { match } = this.props;
    const userName = match && match.params && match.params.userName;
    console.log("Retrived userName is: ",userName);
    if (!this.state.loaded)
    {
      this.onFetchUserData(userName);
    }
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    
    return (
      <div>
        {this.state.image && 
          <ImagePage image={this.state.image} description={this.state.desc} closeFunc={this.closeImage} name={userName}  avatar={this.state.profilePic}/>
        }
        <div className={this.state.image?"mainContainer blurred":"mainContainer"} >
          <img src={scrolitLogo} alt="react" />
          <div className="profile">
              <div className="profilePic">
                <img src={this.state.profilePic}  />
              </div>
              <div className="profileInfo">
                <h1>{userName}</h1>
                <h2>{this.state.subtitle}</h2>
              </div>
          </div>

          {this.state.images &&
          <Slider {...sliderSettings}>

         

          { this.state.images.map( image  => {
            return (
            <div>
                <h3 onClick={() => this.openImage(image.image,image.desc)}>
                  <img src={image.image} alt="react" />
                </h3>
            </div>
            )
          })
        }
          
          </Slider>
          }

          <div style={{marginBottom:'30px'}} />
          

          {this.state.images &&
            <Slider {...sliderSettings}>
  
           
  
            { this.state.images.map( image  => {
              return (
              <div>
                  <h3 onClick={() => this.openImage(image.image,image.desc)}>
                    <img src={image.image} alt="react" />
                  </h3>
              </div>
              )
            })
          }
            
            </Slider>
            }


          


          
          <div style={{ flexDirection: 'column',marginTop:'20px'}}>
              


          </div>
          <Footer brand={true} />
        </div>
      </div>
    );
  }
}

export default UserPage;
