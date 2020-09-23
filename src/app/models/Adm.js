const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(
        `SELECT * FROM recipes ORDER BY title DESC`, function(err, results){
            if(err) throw `Database error! ${err}`
            callback(results.rows)
        })
    },
    create(values, callback) {
        const query = `
            INSERT INTO recipes (
                id_title,
                title,
                image,
                author,
                ingredients,
                preparation,
                information
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id`
        
        db.query(query, values, function(err, results){
            if(err) throw `Database error! ${err}`
            
            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`
            SELECT * FROM recipes WHERE id = $1`, [id], 
            function(err, results){
                if(err) throw `Database error! ${err}`

                callback(results.rows[0])
            })
    },
    update(values, callback) {
        const query = `
            UPDATE recipes SET
            id_title=($1),
            title=($2),
            image=($3),
            author=($4),
            ingredients=($5),
            preparation=($6),
            information=($7) WHERE id = $8`

            db.query(query, values, function(err, results){
                if(err) throw `Database error! ${err}`

                callback()
            })
    },
    delete(id, callback) {
        db.query(`DELETE FROM recipes WHERE id = $1`, [id], 
        function(err, results){
            if(err) throw `Database error! ${err}`

            return callback()
        })
    }
}