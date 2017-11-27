const db = require('./db/contacts');

const create = function(contact) {
  contacts.create(contact)
  .then(result => result.rows[0].id)
}

const edit = function() {
  let { id, newName, newPhone } = contactInfo
  return contacts.edit(id, newName, newPhone)
}

const destroy = function(contactId) {
  return contacts.destroy(contactId)
}

const findAll = function() {
  return contacts.getAll()
}

const findById = function(contactId) {
  return contacts.findById(contactId)
}

const search = function(searchQuery) {
  return contacts.search(searchQuery)
}



module.exports = {
  create: db.create,
  findAll: db.findAll,
  findById: db.findById,
  destroy: db.destroy,
  search: db.search,
  edit: db.edit
}
