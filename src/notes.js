const {nanoid} = require('nanoid');

const notes = [];

const addNote = (title, tags, body) => {
  const id = nanoid(16);

  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };

  notes.push(newNote);

  return {
    success: notes.filter((note) => note.id === id).length > 0,
    id: id,
  };
};

const getNotes = () => notes;

const getNote = (id) => notes.filter((note) => note.id === id)[0];

const editNote = (id, title, tags, body) => {
  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) return false;

  const updatedAt = new Date().toISOString();

  notes[index] = {
    ...notes[index],
    title,
    tags,
    body,
    updatedAt,
  };

  return true;
};

const deleteNote = (id) => {
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

module.exports = {notes, addNote, getNotes, getNote, editNote, deleteNote};
