const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM members ORDER BY name ASC`, function(err, results){
            if(err) throw `Database error! ${err}`
            callback(results.rows)
        })
    },
    create(values, callback) {
        const query = `
            INSERT INTO members (
                name,
                avatar_url,
                email,
                birth,
                gender,
                blood,
                weight,
                height,
                instructor_id
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING id
        `

        db.query(query, values, function(err, results){
            if(err) throw `Database error! ${err}`
            
            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`
            SELECT members.*, instructors.name AS instructor_name 
            FROM members LEFT JOIN instructors ON
            (members.instructor_id = instructors.id) 
            WHERE members.id = $1`, [id], 
            function(err, results){
                if(err) throw `Database error! ${err}`

                callback(results.rows[0])
            })
    },
    update(values, callback) {
        const query = `
            UPDATE members SET
            avatar_url=($1),
            name=($2),
            birth=($3),
            gender=($4),
            email=($5),
            blood=($6),
            weight=($7),
            height=($8),
            instructor_id=($9) WHERE id = $10`

            db.query(query, values, function(err, results){
                if(err) throw `Database error! ${err}`

                callback()
            })
    },
    delete(id, callback) {
        db.query(`DELETE FROM members WHERE id = $1`, [id], 
        function(err, results){
            if(err) throw `Database error! ${err}`

            return callback()
        })
    },
    instructorsSelectOptions(callback) {
        db.query(`SELECT name, id FROM instructors`, function(err, results){
            if (err) throw `Database error! ${err}`
            callback(results.rows)
        })
    },
    paginate(params, callback){
        const { filter, limit, offset } = params
        // Função de callback como tinham mostrado no curso
        // const { filter, limit, offset, callback } = params

        let query = "",
            filterQuery = "",
            totalQuery = `(
                SELECT count(*) FROM members
            ) AS total`
            
        if( filter ) {        
            filterQuery = `
            WHERE members.name ILIKE '%${filter}%'
            OR members.email ILIKE '%${filter}%'`

            totalQuery = `(
                SELECT count(*) FROM members
                ${filterQuery}
            ) AS total`
        }

        query = `
            SELECT members.*, ${totalQuery} FROM members
            ${filterQuery} LIMIT $1 OFFSET $2`

        db.query(query, [limit, offset], function(err, results){
            if(err) throw `Database error ${error}`

            // Problema no código curso ----
            // Se fosse pesquisado algo que não tinha no registro do banco
            // O resultado voltava como undefined e caia no throw exception
            // Minha solução - verifica se é undefined (if(!results.rows[0]) não funciona)
            // Se sim faz a pesquisa com todos os resultados
            if(results.rows[0] != undefined){
                callback(results.rows)
            }
            else{
                query = `
                    SELECT members.*, 
                    ( SELECT count(*) FROM members ) 
                    AS total FROM members LIMIT $1 OFFSET $2`
                db.query(query, [limit, offset], function(err, results){
                    if(err) throw `Database error ${error}`
                    
                    callback(results.rows)
                })
            }    
        })
    }
}