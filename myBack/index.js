const express = require('express')
const user = require('./routes/user')
const auth = require('./routes/auth')
const courses = require('./routes/courses')
const subjects = require('./routes/subjects')
const cors = require('cors')

const app = express();


app.use(cors())
app.use(express.json()); // conver json to javascript and javascript to json
app.use(express.static('public'))


  
app.use('/api/subjects',subjects);
app.use('/api/users',user)
app.use('/api/courses',courses)
app.use('/api/auth',auth)


// PORT 
const port = process.env.PORT || 3002; 

app.listen(port, () => console.log(`active on ${port}`))