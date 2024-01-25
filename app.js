const express = require('express')
const path = require('path')
const queries = require('./queries')
const cors = require('cors')
const app = express()

app.use(express.static(path.join(__dirname, "/public")))
app.use(cors())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, ("public/html/turntable.html")))
})

app.get("/artist", (req, res) => {
    res.sendFile(path.join(__dirname, ("public/html/headphones.html")))
})

app.get("/schedulepage", (req,res) => {
    res.sendFile(path.join(__dirname, ("public/html/schedule.html")))
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