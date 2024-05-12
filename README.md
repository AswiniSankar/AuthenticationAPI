# AuthenticationAPI
API developed using node.js for user Authentication.

### pre-requiste
- *Node*

- *Npm*

### Dependencies  
+ abort-controller
+ bcryptjs
+ express
+ mongoose
+ jsonwebtoken
+ swagger-ui-express

##### Install command
_`npm install abort-controller express mongoose jsonwebtoken bcryptjs swagger-ui-express `_

***
#### API 
Base URL - http://localhost:5000
+ To register new user
  + Method - POST
  + End points - ` /auth/register `
  + Parameter
    Parameter | Type | Isrequired | Default value |
    ----------|------|------------| --------------|
    username | string | Yes | |
    email | string | Yes | |
    password | string | Yes | |  |
    profileVisibility | boolean | No | true |
    isAdmin | boolean | No | false |
    phone | string | No | |
    bio | string | No | |
    photo | string | No | |
      
+ To login user
  + Method - POST
  + End points - ` /auth/login `
  + Parameter
    Parameter | Type | Isrequired | Default value |
    ----------|------|------------| --------------|
    email | string | Yes | |
    password | string | Yes | |  |
  
+ To get user profile details
  + Method - GET
  + End points - ` /profile `
  + Header - Pass the token value which got from the user login response
  
+ To update the user profile 
  + Method - PUT
  + End points - ` /profile/{username} `
  + Parameter - Pass the below any paremeter and its update value
    Parameter | Type | Isrequired | Default value |
    ----------|------|------------| --------------|
    email | string | No | |
    password | string | No | |  |
    profileVisibility | boolean | No | true |
    phone | string | No | |
    bio | string | No | |
    photo | string | No | |
      
  
--- 
Swagger UI is used to test the API. API access URL http://localhost:5000/api-docs/
