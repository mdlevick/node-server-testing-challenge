  
const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove
};

async function insert(person) {
  const [id] = await db("people").insert(person);
  return db("people")
    .where({ id })
    .first();
}

function remove(id) {
  return db("people")
    .where({ id })
    .del();
}