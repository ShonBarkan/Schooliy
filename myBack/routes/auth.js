const jwt = require('jsonwebtoken')
const bcrypt =require('bcrypt')
const express = require('express')
const router = express.Router();
const client=require('../Models/client')

const generateJWT =function(usersid,name){
  const token = jwt.sign({ usersid:usersid, name:name},'BonBon')
  return token;
}

router.post('/', async (req, res) => {
    const sqlQuery=`SELECT * FROM users WHERE email='${req.body.email}'`
    const {rows}= await client.query(sqlQuery)
  if (rows.length==0) return res.status(400).send('Invalid email or password!!!') 
  
  let token =null;
  const valiedPassword= await bcrypt.compare(req.body.password , rows[0].password)
  if(valiedPassword)
   token = generateJWT(rows[0].usersid,rows[0].name);
  token? res.send(token) : res.status(400).send('Invalid password or email!') 

})




module.exports = router