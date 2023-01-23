const express = require('express')
const router = express.Router();
const client=require('../Models/client')
const bcrypt =require('bcrypt')



// GET ALL users 
router.get('/', async (req,res)=>{
    const sqlQuery=`SELECT * FROM users`
    try{
        const {rows}= await client.query(sqlQuery)
        res.send(rows)
    }catch(error){
        res.status(400).send('Oh Nooo')
    }
})

// // GET user BY ID 
router.get('/:id',async (req, res)=>{
    const sqlQuery=`SELECT * FROM users WHERE usersid=${req.params.id}`
    try{
        const {rows}= await client.query(sqlQuery)
        res.send(rows)
    }catch(error){
        res.sendStatus(400).send('Oh Nooo')
    }
})

// add user
router.post('/', async (req, res) => {

    const body=req.body
    
    const {rows}= await client.query(`SELECT * FROM users WHERE email='${body.email}';`)
    if (rows.length!=0) return res.status(400).send('user exsist')

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(body.password,salt)

    try{
        const sqlQuery = `INSERT INTO users (name,password,email,verification_question) VALUES ($1,$2,$3,$4)`
        const values = [body.name,password,body.email,body.verification_question]
        const result = await client.query(sqlQuery,values)
        res.send(result)
    }
    catch(err){
        res.status(500).send(console.log(err))
    }    
    
})

// new password
router.put('/', async (req, res)=>{
    const body=req.body
    const {rows}= await client.query(`SELECT * FROM users WHERE email='${body.email}';`)
    if (rows.length==0) return res.status(400).send('user not exsist')

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(body.password,salt)

    if(rows[0].verification_question===body.verification_question){
        try{
            const sqlQuery = `UPDATE users SET password = '${password}' WHERE email='${body.email}'`
            const result = await client.query(sqlQuery)
            res.send(result)
        }
        catch(err){
            res.status(500).send(console.log(err))
        }
    }else{res.send('Incorrect answer, try again')} 

})


module.exports = router