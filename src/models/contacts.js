const db = require('./db/contacts');

const create = function() {
  contacts.create()
  .then(result => result.rows[0].id)
}

const edit = function() {
  let { id, newName, newPhone } = contactInfo
  return contacts.edit(id, newName, newPhone)
}

const destroy = function(id) {
  return contacts.destroy(id)
}

const getAll = function() {
  contacts.getAll()
}

module.exports = {
  create: db.create,
  findAll: db.findAll,
  findById: db.findById,
  destroy: db.destroy,
  search: db.search
}
