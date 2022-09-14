# Cedrus-FE-Challenge

## Setup

1) open cmd to any directory you want your project to be on
2) run on cmd "git clone https://github.com/MoeAS/Cedrus-FE-Challenge.git"
3) cd to the project folder named "Cedrus-FE-Challenge", by running "cd Cedrus-FE-Challenge" on cmd
4) run on cmd: "npm i"
5) run on cmd: "ng serve --open" which will run the app on localhost:4200

Next we setup the mock server by:

1) open another instance of cmd and cd to the project folder again to "Cedrus-FE-Challenge"
2) run on cmd: npm run server
Note: the server runs on localhost:5000 where I created 2 server paths which are:
localhost:5000/items (which is run on dev env by running on cmd "ng serve -c development" or just "ng serve" since it is the default config)
localhost:5000/about (which is run on prod env by running on cmd "ng serve -c production")
