const knex = require('../model/knex')

async function getOneCode(id){

    const data = await knex.raw(`SELECT * FROM html WHERE id = ?`, [id])

    // const data = await knex('html')
    // .select('*')
    // .where({id})
    return data.rows
}

module.exports = {
    getOneCode
}