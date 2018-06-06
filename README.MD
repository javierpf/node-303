npm install sequelize-cli -g
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
Execute migrations, this will create needed tables
sequelize db:migrate
Execute the seed anytime after 
sequelize db:seed:all