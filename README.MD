npm install sequelize-cli -g
sequelize init
Modify config.js according to local database
{
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "303-test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "postgres",
    "database": "303-test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "postgres",
    "database": "303-test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
Deploy application for the first time, it will create the table books
Execute the seed anytime after 

sequelize db:seed:all