# Auth-System

A basic authentication system which can be used as the first step in any website! 
Tech Stack : HTML, CSS, JS, Node.js, Express.js, Passport.js


<h2>Sign in View:</h2>

![alt text](/cover_pics/sign-in.png)

<h2>Sign up View:</h2>

![alt text](/cover_pics/sign-up.png)

<h2>Home Views:</h2>

![alt text](/cover_pics/home1.png)
![alt text](/cover_pics/home2.png)

<h2>Profile Views:</h2>

![alt text](/cover_pics/profile1.png)
![alt text](/cover_pics/profile2.png)


# How-To-Use
1. Clone this project
2. Start by installing npm and mongoDB if you don't have them already.
3. Run the Mongo Server.
4. Create a google login credentials and subsequently a google Oauth ID. Refer this : https://developers.google.com/identity/protocols/oauth2 .Don't share these crednetials with anyone.
5. Create a dummy email id which can be used by mailer. (You have to make your dummy account less secure by going into mail settings). Try to avoid your personal mail id.
6. Navigate to Project Directory by :
```
cd Auth-System
```
7. Edit .env-example file and add your own credentials(google client id and google client secret and gmail email password in it) and then change it's name to .env
8. run following commands :
```
npm install 
npm start or node index.js
```

# Basic-Features
1. Basic Sign up and Sign in functionality with proper authentication on backend (Manual and Google OAuth both).
2. Mailer for forgot password.
3. Mailer for security ie, if a user changes password a mail is sent with access token which can be used by them to restore account if compromised.
4. Proper Notifications using noty.
5. Option to edit profile and reset password if authenticated manually.
6. Option to restore password if the user has forgotton it. (Please check the spam and if the mail is in spam unspam it and you'll be able to access link).


# Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:
<p>/routes - containes all the routes.</p>
<p>/assets - static js css and image files.</p>
<p>/controller - contains functions to connect to different views.</p>
<p>/model - to store data in db we need models.</p>
<p>/config - contains config files for mongoos, passport, node mailer or any other configs.</p>
<p>/views - used by ejs(templating engine) for server side rendering.</p>
<p>/mailers - used by nodemailer for basic mailing functionalies</p>

Feel free to use and contribute! :)
