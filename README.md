# Crown Clothing

You can find the deployed project at [Crown Clothing](https://crwn-clothing-v1.herokuapp.com/).
** link does not work right now, known issue **

This application is a react app that demostrates a demo build of a clothing store called Crown Clothing. Crown Clothing uses Firebase as its database and user authentication and for payments, we are using Stripe. For state management we are using Redux. This application is hosted on Heroku.

### Features to Add to next Release

- Make this application mobile friendly - add media queries
- Change/Style navigation bar for mobile displays
- Add social media links
- Add click outside checkout dropdown to collapse on header
- Add better navigation on shop page to navigate between categories
- Add contact page
- Add user profile pic into header component
- Add change quantity/remove in checkout dropdown
- Change or style the format "quantityXprice" in checkout dropdown
- Add "Cart is Empty" message in checkout component if nothing is in cart
- Add $ dollar sign to the price column in checkout component
- Add tax based on location in checkout component

### Bugs / Need to fix

- N/A

<br>

![Cityspire](/public/images/crwnclothing.jpg)
![Cityspire](/public/images/crwnclothingsignin.jpg)

<br>

## Contributors

|                                        [Shane Jeremich](https://github.com/sjeremich23)                                        |
| :----------------------------------------------------------------------------------------------------------------------------: |
|                      [<img src="public/images/shane.png" width ="200" />](https://github.com/shanejeremich)                      |
|                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/shanejeremich)                    |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/shanejeremich/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v17.0.1-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=flat&logo=Stripe&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=flat&logo=heroku&logoColor=white)

> For payments in checkout, please use any test card from [Stripe Test Docs](https://stripe.com/docs/testing) > <br>
> One I like to use is 4242 4242 4242 4242 - Exp: 01/22 - CVC: 123

### Key Features

- Demo store with different clothing categories
- Integration of Firebase for Authentication and Users
- Integration of Stripe for payments

### Front end deployed to `Heroku`
> [Crown Clothing](https://crwn-clothing-v1.herokuapp.com/)

### Back end is using `Firebase`

# APIs

- Firebase
- Stripe
- Heroku

# Installation Instructions

- Fork and clone the repo to install it as your own remote.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory
    * eject - copy the configuration files and dependencies into the project so you have full control over them
