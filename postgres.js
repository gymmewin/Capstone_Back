const Client = require('pg').Client

const dbConfig = {
   //5432 is Postgres default port
	connectionString: 'postgresql://localhost:5432/tickets',
}

if(process.env.DATABASE_URL){
	dbConfig.ssl = { rejectUnauthorized: false }
	dbConfig.connectionString = process.env.DATABASE_URL

}

const client = new Client(dbConfig)


module.exports = client;
