const db = require('../../config/db')

module.exports = {
    // all(callback) {
    //     db.query(
    //     `SELECT instructors.*, count(members) AS total_students
    //     FROM instructors LEFT JOIN members ON 
    //     (instructors.id = members.instructor_id)
    //     GROUP BY instructors.id ORDER BY total_students DESC`, function(err, results){
    //         if(err) throw `Database error! ${err}`
    //         callback(results.rows)
    //     })
    // },
    create(values, callback) {
        const query = `
            INSERT INTO recipes (
                title,
                image,
                ingredients,
                preparation,
                information
            ) VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `
        
        db.query(query, values, function(err, results){
            if(err) throw `Database error! ${err}`
            
            callback(results.rows[0])
        })
    },
    // find(id, callback) {
    //     db.query(`
    //         SELECT * FROM instructors WHERE id = $1`, [id], 
    //         function(err, results){
    //             if(err) throw `Database error! ${err}`

    //             callback(results.rows[0])
    //         })
    // },
    // findBy(filter, callback){
    //     db.query(
    //         `SELECT instructors.*, count(members) AS total_students
    //         FROM instructors LEFT JOIN members ON 
    //         (instructors.id = members.instructor_id)
    //         WHERE instructors.name ILIKE '%${filter}%'
    //         OR instructors.services ILIKE '%${filter}%'
    //         GROUP BY instructors.id ORDER BY total_students DESC`, function(err, results){
    //             if(err) throw `Database error! ${err}`
    //             callback(results.rows)
    //         })
    // },
    // update(values, callback) {
    //     const query = `
    //         UPDATE instructors SET
    //         avatar_url=($1),
    //         name=($2),
    //         birth=($3),
    //         gender=($4),
    //         services=($5) WHERE id = $6`

    //         db.query(query, values, function(err, results){
    //             if(err) throw `Database error! ${err}`

    //             callback()
    //         })
    // },
    // delete(id, callback) {
    //     db.query(`DELETE FROM instructors WHERE id = $1`, [id], 
    //     function(err, results){
    //         if(err) throw `Database error! ${err}`

    //         return callback()
    //     })
    // },
    // paginate(params, callback){
    //     const { filter, limit, offset } = params
    //     // Função de callback como tinham mostrado no curso
    //     // const { filter, limit, offset, callback } = params

    //     let query = "",
    //         filterQuery = "",
    //         totalQuery = `(
    //             SELECT count(*) FROM instructors
    //         ) AS total`
            
    //     if( filter ) {        
    //         filterQuery = `
    //         WHERE instructors.name ILIKE '%${filter}%'
    //         OR instructors.services ILIKE '%${filter}%'`

    //         totalQuery = `(
    //             SELECT count(*) FROM instructors
    //             ${filterQuery}
    //         ) AS total`
    //     }

    //     query = `
    //         SELECT instructors.*, ${totalQuery}, count(members) as total_students 
    //         FROM instructors LEFT JOIN members ON (instructors.id = members.instructor_id )
    //         ${filterQuery} GROUP BY instructors.id LIMIT $1 OFFSET $2`

    //     db.query(query, [limit, offset], function(err, results){
    //         if(err) throw `Database error ${error}`

    //         // Problema no código curso ----
    //         // Se fosse pesquisado algo que não tinha no registro do banco
    //         // O resultado voltava como undefined e caia no throw exception
    //         // Minha solução - verifica se é undefined (if(!results.rows[0]) não funciona)
    //         // Se sim faz a pesquisa com todos os resultados
    //         if(results.rows[0] != undefined){
    //             callback(results.rows)
    //         }
    //         else{
    //             query = `
    //                 SELECT instructors.*, 
    //                 ( SELECT count(*) FROM instructors ) AS total, 
    //                 count(members) as total_students 
    //                 FROM instructors LEFT JOIN members 
    //                 ON (instructors.id = members.instructor_id )
    //                 GROUP BY instructors.id LIMIT $1 OFFSET $2`
    //             db.query(query, [limit, offset], function(err, results){
    //                 if(err) throw `Database error ${error}`
                    
    //                 callback(results.rows)
    //             })
    //         }    
    //     })
    // }
}