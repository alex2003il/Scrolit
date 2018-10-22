const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const os = require('os');
const fs = require('fs');
const app = express();
const TestImages =
[
  {
    image:base64Encode(__dirname+'/img/test/1.png',"png"),
    desc:"Image 1"
  },
  {
    image:base64Encode(__dirname+'/img/test/2.png',"png"),
    desc:"Image 2"
  },
  {
    image:base64Encode(__dirname+'/img/test/3.png',"png"),
    desc:"Image 3"
  },
  {
    image:base64Encode(__dirname+'/img/test/4.png',"png"),
    desc:"Image 4"
  },
];
function base64Encode(file,type) {
  const body = fs.readFileSync(file);
  const head=type=="png"?"data:image/png;base64,":"data:image/jpeg;base64,";
  return head+body.toString('base64');
}

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.post('/api/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});

app.post('/api/getUserData',function(req,res){
  var user_name=req.body.user;
  let response={};
  console.log("fetching data for user = "+user_name);
  res.setHeader('Content-Type', 'application/json');
  response.user_name=user_name;
  response.desc="My things: Outdoor, Nutrition, Travel";
  response.profilePic=base64Encode(__dirname+'/img/test/avatar.jpg',"jpg");
  response.images=TestImages;
  response.content={
   images:{},
   desc:{}  
  };
  console.log("Sending the following response: ",response);
  res.send(JSON.stringify(response));
});

app.use(express.static('public'));
app.get('/api/getUsername', (req, res) => res.send({
  username: os.userInfo().username
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../../public'+'/index.html'));
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Listening on port '));


