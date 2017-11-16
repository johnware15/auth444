const db = require('./db.js')
const bcrypt = require('bcrypt')

const signupText = `INSERT INTO users(email, password) VALUES ($1, $2)`;

const signup = function(text, values) {
  let dbPassword = values[1]
  return bcrypt.hash(dbPassword, 10)
  .then(hash => {
    values[1] = hash
    return db.query(text, values)
    .then(result => console.log('Successfully added data to users table'))
    .catch(error => {
      console.log('Could not insert into users table')
      console.log(error)
    })
  })
  catch(error => {
    console.log('Could not hash password')
    console.log(error)
  })
}

module.exports = {
  signup,
  signupText
}
