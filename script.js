let notesTitle = [];
let notes = [];
let archivedNotesTitle = [];
let archivedNotes = [];
let trashedNotesTitle = [];
let trashedNotes = [];

function init() {
  getFromLocalStorage();
  renderNotes();
  renderArchivedNotes();
  renderTrashedNotes();
}

function renderNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = '';

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderArchivedNotes() {
  let archivedContentRef = document.getElementById('archive_content');
  archivedContentRef.innerHTML = '';

  for (let indexArchivedNote = 0; indexArchivedNote < archivedNotes.length; indexArchivedNote++) {
    archivedContentRef.innerHTML += getArchivedNoteTemplate(indexArchivedNote);
  }
}

function renderTrashedNotes() {
  let trashedContentRef = document.getElementById('trash_content');
  trashedContentRef.innerHTML = '';

  for (let indexTrashedNote = 0; indexTrashedNote < trashedNotes.length; indexTrashedNote++) {
    trashedContentRef.innerHTML += getTrashedNoteTemplate(indexTrashedNote);
  }
}

function addNote() {
  let titleInputRef = document.getElementById('note_title_input');
  let titleInput = titleInputRef.value;
  let noteInputRef = document.getElementById('note_content_input');
  let noteInput = noteInputRef.value;

  notes.push(noteInput);
  notesTitle.push(titleInput);

  saveToLocalStorage();
  renderNotes();

  titleInputRef.value = '';
  noteInputRef.value = '';
}

function pushNoteToArchive(indexNote) {
  let archivedNote = notes.splice(indexNote, 1);
  archivedNotes.push(archivedNote);

  let archivedTitle = notesTitle.splice(indexNote, 1);
  archivedNotesTitle.push(archivedTitle);

  saveToLocalStorage();
  init();
}

function pushNoteToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashedNotes.push(trashNote);

  let trashNotesTitle = notesTitle.splice(indexNote, 1);
  trashedNotesTitle.push(trashNotesTitle);

  saveToLocalStorage();
  init();
}

function pushArchivedNoteToNotes(indexArchivedNote) {
  let restoredNote = archivedNotes.splice(indexArchivedNote, 1);
  notes.push(restoredNote);

  let restoredTitle = archivedNotesTitle.splice(indexArchivedNote, 1);
  notesTitle.push(restoredTitle);

  saveToLocalStorage();
  init();
}

function pushArchivedNoteToTrash(indexArchivedNote) {
  let trashedNote = archivedNotes.splice(indexArchivedNote, 1);
  trashedNotes.push(trashedNote);

  let trashedTitle = archivedNotesTitle.splice(indexArchivedNote, 1);
  trashedNotesTitle.push(trashedTitle);

  saveToLocalStorage();
  init();
}

function pushRestoredNoteToNotes(indexTrashedNote) {
  let restoredNote = trashedNotes.splice(indexTrashedNote, 1);
  notes.push(restoredNote);

  let restoredTitle = trashedNotesTitle.splice(indexTrashedNote, 1);
  notesTitle.push(restoredTitle);

  saveToLocalStorage();
  init();
}

function deleteNote(indexTrashedNote) {
  trashedNotesTitle.splice(indexTrashedNote, 1);
  trashedNotes.splice(indexTrashedNote, 1);

  saveToLocalStorage();
  init();
}

function saveToLocalStorage() {
  localStorage.setItem('notesTitle', JSON.stringify(notesTitle));
  localStorage.setItem('notes', JSON.stringify(notes));
  localStorage.setItem('archivedNotesTitle', JSON.stringify(archivedNotesTitle));
  localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes));
  localStorage.setItem('trashedNotesTitle', JSON.stringify(trashedNotesTitle));
  localStorage.setItem('trashedNotes', JSON.stringify(trashedNotes));
}

function getFromLocalStorage() {
  getNotesFromLocalStorage();
  getArchivedFromLocalStorage();
  getTrashedFromLocalStorage();
}

function getNotesFromLocalStorage() {
  let note = JSON.parse(localStorage.getItem('notes'));
  let noteTitle = JSON.parse(localStorage.getItem('notesTitle'));

  if (note === null) {
    note = [];
  }
  if (noteTitle === null) {
    noteTitle = [];
  }
  notes = note;
  notesTitle = noteTitle;
}

function getArchivedFromLocalStorage() {
  let archivedNote = JSON.parse(localStorage.getItem('archivedNotes'));
  let archivedNoteTitle = JSON.parse(localStorage.getItem('archivedNotesTitle'));

  if (archivedNote === null) {
    archivedNote = [];
  }
  if (archivedNoteTitle === null) {
    archivedNoteTitle = [];
  }
  archivedNotes = archivedNote;
  archivedNotesTitle = archivedNoteTitle;
}

function getTrashedFromLocalStorage() {
  let trashedNote = JSON.parse(localStorage.getItem('trashedNotes'));
  let trashedNoteTitle = JSON.parse(localStorage.getItem('trashedNotesTitle'));

  if (trashedNote === null) {
    trashedNote = [];
  }
  if (trashedNoteTitle === null) {
    trashedNoteTitle = [];
  }
  trashedNotes = trashedNote;
  trashedNotesTitle = trashedNoteTitle;
}
