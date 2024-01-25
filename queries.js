const Pool = require('pg').Pool
const pool = new Pool({
    user:'cbreaux2',
    host:'localhost',
    database:'musicfest', 
    password: 'wildrice',
    port: 5432
})

const getArtists = (req, res) => {
    pool.query('SELECT * FROM artists', (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getArtistById = (req, res) => {
    const id = req.params.id
    pool.query('SELECT * FROM artists WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows[0])
    })
}

const getVideo = (req, res) => {
    const id = req.params.id
    pool.query('SELECT video FROM artists WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows[0])
    })
}

const getSchedule = (req, res) => {
 pool.query('SELECT * FROM schedule', (error, results) => {
    if(error){
        throw error
    }
    res.status(200).json(results.rows)
 })
}

const getScheduleByDay = (req, res) => {
    const day = req.params.day
    pool.query('SELECT * FROM schedule WHERE day = $1', [day], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getScheduleByStage = (req, res) => {
    const stage = req.params.stage 
    pool.query('SELECT * FROM schedule WHERE stage = $1', [stage], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getScheduleByType = (req, res) => {
    const type = req.params.type
    pool.query('SELECT * FROM schedule WHERE type = $1', [type], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getSponsors = (req, res) => {
    pool.query('SELECT * FROM sponsors', (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}


module.exports = {
    getArtists, 
    getArtistById,
    getVideo,
    getSchedule,
    getScheduleByDay,
    getScheduleByStage,
    getScheduleByType, 
    getSponsors, 
}