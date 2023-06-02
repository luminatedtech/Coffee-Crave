# Coffee Crave: Knowing where you should get your caffeine 

## Description

This project utilized a React frontend and a Ruby on Rails backend to show all different types of coffee stores and what users are saying about them. On the backend, we have 3 model: Users, Shops, and Reviews. They have the correct associations such that Users and Shops have many reviews and Reviews belong to shops and users. Using the backend, you are able to login/logout of your session as well staying logged in. You can view shops as well as see their associated reviews. You are also able to make your own user profile with which to make your own reviews. This project utilized validations so that bad data cannot be saved as well as authorization so that only certain users can do actions such as creating and deleting reviews. 


## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

## How to Use it

You will first be greeted by a login form. If it is your first time, you can signup using the signup form from where you will then be redirected to a page of a list of coffee shops. From there, you can view information about the shops as well as the reviews associated with them. There is a link to write your own review, where you can make a comment as well as give it a number of stars. If you are the owner of that review, you can also delete it as you like. 

## Credits
Shoutouts to my lovely friends who helped me out immensely. Check our their profiles and project down below
Kenneth Lee: github link: 
Conor Yuen: github link: https://github.com/HeroicSam

## license
MIT License

Copyright (c) [2023] [Allen Kim]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
