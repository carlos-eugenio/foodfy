const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(
        `SELECT * FROM recipes ORDER BY title DESC`, function(err, results){
            if(err) throw `Database error! ${err}`
            callback(results.rows)
        })
    },
    find(id_title, callback) {
        db.query(`
            SELECT * FROM recipes WHERE id_title ILIKE '%${id_title}%'`, 
            function(err, results){
                if(err) throw `Database error! ${err}`

                callback(results.rows[0])
            })
    }
}