const {addNote, getNotes, getNote, editNote, deleteNote} = require('./notes');

const addNoteHandler = (request, h) => {
  const {title, tags, body} = request.payload;

  const {success, id} = addNote(title, tags, body);

  if (success) {
    return h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    }).code(201);
  } else {
    return h.response({
      status: 'fail',
      message: 'Catatan gagal ditambahkan',
    }).code(500);
  }
};

const getAllNotesHandler = (_, __) => ({
  status: 'success',
  data: {
    notes: getNotes(),
  },
});

const getNoteByIdHandler = (request, h) => {
  const {id} = request.params;
  const note = getNote(id);

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  return h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  }).code(404);
};

const editNoteByIdHandler = (request, h) => {
  const {id} = request.params;
  const {title, tags, body} = request.payload;

  const success = editNote(id, title, tags, body);

  if (success) {
    return h.response({
      status: 'success',
      message: 'Catatan berhasil diperbaharui',
    }).code(200);
  } else {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbaharui catatan. Id tidak ditemukan',
    }).code(404);
  }
};

const deleteNoteByIdHandler = (request, h) => {
  const {id} = request.params;

  const success = deleteNote(id);

  if (success) {
    return h.response({
      status: 'success',
      message: 'Catatan berhasil dihapus',
    }).code(200);
  }

  return h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus. Id tidak ditemukan',
  }).code(404);
};

module.exports = {addNoteHandler, getAllNotesHandler,
  getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler};

