const {Router}= require('express')
const router= Router()
const client=require('../Models/client')
const auth=require('../middlewares/auth')

//get all courses
router.get('/', async (req,res)=>{
    const sqlQuery='SELECT * FROM courses'
    try{
        const {rows}= await client.query(sqlQuery)
        res.send(rows)
    }catch(error){
        res.sendStatus(400).send('Oh Nooo')
    }
})

//get all user courses
router.get('/:usersid' ,async (req,res)=>{
    const sqlQuery=`SELECT * FROM courses WHERE usersid=${req.params.usersid}`
    try{
        const {rows}= await client.query(sqlQuery)
        res.send(rows)
    }catch(error){
        res.sendStatus(400).send('Oh Nooo')
    }
})
//add new coures
router.post('/',auth, async (req,res)=>{

        const sqlQuery1=`SELECT name, usersid FROM courses WHERE subjectid=${req.body.subjectid}`
        const sqlQuery = `INSERT INTO courses (name,subjectid, usersid,pic) VALUES ($1,$2,$3,$4)`
        const {rows}= await client.query(sqlQuery1)

    if(rows.filter(row=> row.usersid===req.body.usersid).length>0) return res.send('user alredy lerning this subject')
    try{
        if (rows.length==0){
            const name=req.body.subjectname+' #1'
            const values = [name,req.body.subjectid,req.body.usersid,req.body.pic]
            const result = await client.query(sqlQuery,values)
            return res.send('we add a new row && subject to courses')   
        }
    }catch(error){
        return res.sendStatus(400)
    }
    try{
        for (i=1;i<=Math.ceil(rows.length/22);i++){
            count=rows.filter(row=> row.name.includes(req.body.subjectname+' #'+i)).length
            if (count<22){
                const name=req.body.subjectname+' #'+i
                const values = [name,req.body.subjectid,req.body.usersid,req.body.pic]
                const result = await client.query(sqlQuery,values)
                return res.send('we add a new row to courses')   
            }
        }
    }catch(error){
        return res.sendStatus(400).send('Oh Nooooooooooo')
    }
    try{
        const name=req.body.subjectname+' #'+(Math.ceil(rows.length/22)+1)
        const values = [name,req.body.subjectid,req.body.usersid,req.body.pic]
        const result = await client.query(sqlQuery,values)
        return res.send('we add a new course to courses')
    }catch(error){
        return res.sendStatus(400).send('Oh No')
    }
})

//delet a coures
router.delete('/' ,auth,async (req,res)=>{
    console.log(req.body.subjectid);
    console.log(req.body.usersid);
    console.log(req.body);
    const sqlQuery=`DELETE FROM courses WHERE subjectid=${req.body.subjectid} and usersid=${req.body.usersid}`
    await client.query(sqlQuery)
    res.send('deleted')
})




module.exports = router