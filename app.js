const express = require('express')
const path = require('path')
const queries = require('./queries')
const cors = require('cors')
const app = express()

app.use(cors())

// const Pool = require('pg').Pool
// require('dotenv').config

// // let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// const pool = new Pool({
//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE, 
//     password: process.env.PASSWORD,
//     port: 5432
// })

// async function getPgVersion() {
//     const client = await pool.connect();
//     try {
//         const result = await client.query('SELECT version()');
//         console.log(result.rows[0]);
//     } finally {
//         client.release();
//     }
// }

// getPgVersion();

app.get("/", (req, res) => {
    res.send("Hello World!!!")
})

app.get("/artists", queries.getArtists)

app.get("/artists/:id", queries.getArtistById)

app.get("/video/:id", queries.getVideo)

app.get("/schedule", queries.getSchedule)

app.get("/schedule/:day", queries.getScheduleByDay)

app.get("/:stage/stage", queries.getScheduleByStage)

app.get("/schedules/:type", queries.getScheduleByType)

app.get("/sponsors", queries.getSponsors)




app.listen(3000)

console.log("Express is running!")