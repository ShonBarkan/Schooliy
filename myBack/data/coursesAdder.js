const client=require('../Models/client')


async function addCourse(subjectname,subjectid,pic){
for (k=1; k<=43; k++){
    const usersid=k
    const sqlQuery1=`SELECT name, usersid FROM courses WHERE subjectid=${subjectid}`
    const sqlQuery = `INSERT INTO courses (name,subjectid, usersid,pic) VALUES ($1,$2,$3,$4)`
    const {rows}= await client.query(sqlQuery1)

    if(rows.filter(row=> row.usersid===usersid).length>0) continue
    try{
        if (rows.length==0){
            const name=subjectname+' #1'
            const values = [name,subjectid,usersid,pic]
            await client.query(sqlQuery,values)
        }
    }catch(error){
        continue
    }
    try{
        for (i=1;i<=Math.ceil(rows.length/22);i++){
            count=rows.filter(row=> row.name.includes(subjectname+' #'+i)).length
            if (count<22){
                const name=subjectname+' #'+i
                const values = [name,subjectid,usersid,pic]
                await client.query(sqlQuery,values)
            }else{
                try{
                    const name=subjectname+' #'+(Math.ceil(rows.length/22)+1)
                    const values = [name,subjectid,usersid,pic]
                    await client.query(sqlQuery,values)
                }catch(error){
                    continue    
                }
            }
        }
        }catch(error){
            continue
        }

    }
}
addCourse('Python',3,'/pics/Python.png')
console.log('done');
