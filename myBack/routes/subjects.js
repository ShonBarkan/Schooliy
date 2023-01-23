const {Router}= require('express')
const router= Router()
const client=require('../Models/client')

router.get('/', async (req,res)=>{
    const sqlQuery='SELECT * FROM subjects'
    try{
        const {rows}= await client.query(sqlQuery)
        res.send(rows)
    }catch(error){
        res.sendStatus(400).send('Oh Nooo')
    }
})

module.exports = router