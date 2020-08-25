const { Pool } = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password: "pst123456789",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
})