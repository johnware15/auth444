const errorHandler = (error, request, response, next) => {
  response.status(500).send('Something bad happened. This page should be nicer looking');
};

const logErrors = (error, request, response, next) => {
  console.error(error.stack)
  next(error);
};

const notFoundHandler = (request, response) => {
  response.status(404).render('common/not_found')
}

const setDefaultResponseLocals = (request, response, next) => {
  response.locals.query = ''
  next()
}

const userAccess = app.get('/login', function(request, response, next) {
  if(request.session.user && request.session.role === 'admin') {
    response.status(302).redirect('/admin')
  } else if(request.session.user && request.session.role === 'regular') {
    response.status(302).redirect('/regular')
  }
})

module.exports = { errorHandler, logErrors, notFoundHandler, setDefaultResponseLocals, userAccess };
