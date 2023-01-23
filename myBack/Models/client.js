const {Client}= require('pg')
 const client = new Client({
    user:"postgres",
    host:"localhost",
    database:"schooliy",
    password:"25190617",
    port:5432
 })

 client.connect()

 module.exports =client