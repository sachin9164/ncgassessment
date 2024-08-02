# React Application

This is a simple React application that demonstrates the use of React components, state management, and routing.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)


## About the Project

ERP Software is utilized by technology-driven professional service firms whose main
revenue stream comes from billable services. This Timesheet Management module
will enable employees to select projects they worked on and input their
timesheet/attendance for the current month. The data will be stored in a
backend database and sent for manager approval.



## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v18 or later)


## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/react-app.git
    cd react-app
    ```

2. **Install dependencies:**

    Using npm:

    ```sh
    npm install
    ```

    Using Yarn:

    ```sh
    yarn install
    ```

## Running the Application

First make sure you run the backend db

To start the development backend server, run:



```sh

cd db
npm install 
npm i -g json-server  
json-server --watch db.json --port 8000
```


To start the development frontend server, run:

Using npm:

```sh
npm run start
