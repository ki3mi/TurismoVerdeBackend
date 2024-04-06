import express from 'express'
import cors from 'cors'

import db from './database/db.js'

import locationRoutes from './routes/Routes.js'


const app = express()

app.use( cors() )

app.use(express.json())
app.use('/locations', locationRoutes)

try {
    await db.authenticate()
    console.log('Listo tonoto');
} catch (error) {
    console.log(`No listo tonoto ERROR: ${error}`);
}

app.listen( 8080, ()=>{
    console.log('El server está listo tonoto: http://localhost:8080/');
})