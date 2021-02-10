# This project is a CRUD example using Node.js, sequelize as ORM and postgres for the Data Base. 

# You will need: Node.js installed
# npm or yarn installed

# Start by intalling sequelize with the next command:

- npm install sequelize sequelize-cli pg pg-hstore

# sequelize is the sequelize library itself.
# sequelize-cli is a package that enables us interact with the database through sequelize from the CLI.
# pg short for postgres is a Postgres client for Node.js
# pg-hstore is a node package for serializing and deserializing JSON data to hstore format

# Copy the .env_example file and name it .env

# NOW you need to create 2 postgres databases: "dev_db", "test_db" and then, run the migrations with the next command:

- sequelize db:migrate

# Then, try to run the seeds to populate the database:
- sequelize db:seed:all

# Congrats, now run the next command for put the server up:
- npm start

# Thanks to Chinedu Orie for the tutorial, you can check it here: 
# https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp

 