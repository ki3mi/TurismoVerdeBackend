import express from 'express'
import cors from 'cors'

import db from './database/db.js'

import locationRoutes from './routes/Routes.js'


const app = express()

// app.use( cors())
app.use( cors({origin:"*"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/locations', locationRoutes)

try {
    await db.authenticate()
    console.log('Listo tonoto');
} catch (error) {
    console.log(`No listo tonoto ERROR: ${error}`);
}

app.listen( 8080,"172.21.192.1", ()=>{
    console.log('El server está listo tonoto: http://172.21.192.1:8080/');
})