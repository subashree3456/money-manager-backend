const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())


//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

// app.get('/' , (req, res)=>{
//     res.send('Hello World')
// })

const server = () => {

    db()

    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
    }

    app.get("/", function (request, response) {
        response.send("🙋‍♂️, 🌏 🎊✨🤩 !!!!");
      });

server()

