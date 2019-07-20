<h1 align="center">:octocat: Cloning Facebook Server :octocat:</h1>

  <p align="center">
  <img width="150" src="https://miro.medium.com/max/730/1*d2zLEjERsrs1Rzk_95QU9A.png"/>
  </p>
  <p align="center">
  Facebook Clone Server with Express.js
   </p>
   
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Contributors](#contributors)
- [License](#license)

## Introduction
Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js


## Features
* Create, Read, Update, Delete Feeds or Posts
* User can create, delete own status, and logout account
* Authentication with JWT Token
* And more..

## Requirements
* [`npm`](https://www.npmjs.com/get-npm) or [`yarn`](https://yarnpkg.com/) 
* [`Express.js`](https://expressjs.com/)
* [`Sequelize ORM`](http://docs.sequelizejs.com/)
* [`Json Web Token`](https://jwt.io/)
* [`MySQL`](https://www.mysql.com/)
* [`nodemon`](https://nodemon.io/)

## How To Run

1. Clone this repository
   ```
   $ git clone https://github.com/ihsaninh/fb-clone-server.git
   ```
2. Install all depedencies on the package.json
   ```
      cd fb-clone-server
      npm install or yarn (if you using yarn)
   ```
3. Run Facebook Clone
   ```
   $ sequelize db:migrate
   $ nodemon start
   ```

## Contributors
<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/ihsaninh">
          <img width="100" src="https://avatars0.githubusercontent.com/u/24758414?s=460&v=4" alt="Ihsan Nurul Habib"><br/>
          <sub><b>Ihsan Nurul Habib</b></sub>
        </a>
      </td>
    </tr>
  </table>
</center>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
