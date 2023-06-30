const expess = require('express')
const app = expess()
const cors = require('cors')
const mongoose = require('mongoose')
const userData = require('./model/user')

app.use(cors())
app.use(expess.json())
mongoose.connect('mongodb://127.0.0.1:27017/full-mern-stack-app')

app.post('/api/register', async (req,res) => {
    
    console.log(req.body)
    try {
        await userData.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({status: 'ok'})
    } catch(err) {
        console.log(err)
        res.json({status: 'error', error: 'Duplicate Email'})
    }
})


app.listen(3001, () => {
    console.log('server started on port 3001')
})