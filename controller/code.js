const knex = require('../model/knex')

async function getOneCode(id){

    // const data = await knex.raw(`select * from html where id = ?`, id)
    const data = await knex('html')
    .select('*')
    .where({id})
    return data
}

module.exports = {
    getOneCode
}