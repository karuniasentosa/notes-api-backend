const {addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler
} = require('./handler');

const routes = [];

// To add a note
routes.push({
  method: 'POST',
  path: '/notes',
  handler: addNoteHandler,
});

// To get all notes
routes.push({
  method: 'GET',
  path: '/notes',
  handler: getAllNotesHandler,
});

// To Open a note
routes.push({
  method: 'GET',
  path: '/notes/{id}',
  handler: getNoteByIdHandler,
});

// To edit a note
routes.push({
  method: 'PUT',
  path: '/notes/{id}',
  handler: editNoteByIdHandler,
});

// To delete a note
routes.push({
  method: 'DELETE',
  path: '/notes/{id}',
  handler: deleteNoteByIdHandler,
});

module.exports = routes;
