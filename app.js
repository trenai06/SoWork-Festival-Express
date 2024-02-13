const express = require('express')
const path = require('path')
const queries = require('./queries')
const cors = require('cors')
const app = express()

app.use(cors())


const Pool = require('pg').Pool
require('dotenv').config

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
    host: PGHOST,
    user: PGUSER,
    database: PGDATABASE, 
    password: PGPASSWORD,
    port: 5432,

})

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