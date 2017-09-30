fcc project build a pinterest clone [demo](https://knik-fcc-pclone.herokuapp.com)

# User Stories
1. As an unauthenticated user, I can login with Twitter.
2. As an authenticated user, I can link to images.
3. As an authenticated user, I can delete images that I've linked to.
4. As an authenticated user, I can see a Pinterest-style wall of all the images I've linked to.
5. As an unauthenticated user, I can browse other users' walls of images.
6. As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image. (can use jQuery broken image detection)

ack:
* Rahul Arora css masonry [article](http://w3bits.com/css-masonry/)
* ~~Michelle Barker flex box grid on [codepen](https://codepen.io/michellebarker/pen/zvxpoG?editors=0100)~~
* ~~Ohans Emmanuel on medium.com [article](https://medium.freecodecamp.org/the-ultimate-guide-to-flexbox-learning-through-examples-8c90248d4676)~~
* ~~Jhey Tompkins on codeburst [article](https://codeburst.io/how-to-pure-css-masonry-layouts-a8ede07ba31a)~~

create a base for react authentication.

* node.js
* react.js
* react-router-dom (react-router v4)
* mongodb & mongoose
* passport.js (passport-local)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Following vlad's authentication [blog](https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt)

# setup

### install mongo
unixy:
```sudo apt-get install mongodb-org```

## development
1. clone repo
2. create .env file, e.g.
```
dbUri=mongodb://localhost:27017/testdb
jwtSecret=somesecretphrase
```
2. npm install (top level and client dirs)
3. startup mongo
4. npm start

## production (cloud9)
1. clone repo
2. create .env file, e.g.
```
dbUri=mongodb://localhost:27017/testdb
jwtSecret=somesecretphrase
NODE_ENV=production
```
3. npm install (top level and client dirs)
4. cd client && npm run build
5. cd ..
6. start mongo
7. node server
