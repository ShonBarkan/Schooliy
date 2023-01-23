const client=require('../Models/client')
const bcrypt =require('bcrypt')



async function DoUsers(){
for (i=1; i<=50; i++){
    let password="123"+i
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)

    const name='bon'+i
    const email=i+'@gmail.com'
    const sqlQuery = `INSERT INTO users (name,password,email) VALUES ($1,$2,$3)`
    const values = [name,password,email]
    await client.query(sqlQuery,values)
}
}
DoUsers();
console.log('done');
