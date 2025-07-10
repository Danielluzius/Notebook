let allNotes = {
  notesTitle: [],
  notes: [],
  archivedNotesTitle: [],
  archivedNotes: [],
  trashedNotesTitle: [],
  trashedNotes: [],
};

function init() {
  getFromLocalStorage();
  renderAllNotes();
}

function moveNote(indexNote, startKey, destinationKey) {
  let note = allNotes[startKey].splice(indexNote, 1);
  allNotes[destinationKey].push(note[0]);

  let notesTitle = allNotes[`${startKey}Title`].splice(indexNote, 1);
  allNotes[`${destinationKey}Title`].push(notesTitle[0]);

  saveToLocalStorage();
  getFromLocalStorage();
  renderAllNotes();
}

function renderAllNotes() {
  renderNotes();
  renderArchivedNotes();
  renderTrashedNotes();
}

function renderNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = '';

  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderArchivedNotes() {
  let archivedContentRef = document.getElementById('archive_content');
  archivedContentRef.innerHTML = '';

  for (let indexArchivedNote = 0; indexArchivedNote < allNotes.archivedNotes.length; indexArchivedNote++) {
    archivedContentRef.innerHTML += getArchivedNoteTemplate(indexArchivedNote);
  }
}

function renderTrashedNotes() {
  let trashedContentRef = document.getElementById('trash_content');
  trashedContentRef.innerHTML = '';

  for (let indexTrashedNote = 0; indexTrashedNote < allNotes.trashedNotes.length; indexTrashedNote++) {
    trashedContentRef.innerHTML += getTrashedNoteTemplate(indexTrashedNote);
  }
}

function addNote() {
  const titleInput = document.getElementById('title_input');
  const contentInput = document.getElementById('content_input');

  allNotes.notes.push(contentInput.value);
  allNotes.notesTitle.push(titleInput.value);

  saveToLocalStorage();
  getFromLocalStorage();
  renderAllNotes();

  titleInput.value = '';
  contentInput.value = '';
}

function deleteNote(indexTrashedNote) {
  allNotes.trashedNotesTitle.splice(indexTrashedNote, 1);
  allNotes.trashedNotes.splice(indexTrashedNote, 1);

  saveToLocalStorage();
  getFromLocalStorage();
  renderAllNotes();
}

function saveToLocalStorage() {
  localStorage.setItem('notes', JSON.stringify(allNotes.notes));
  localStorage.setItem('notesTitle', JSON.stringify(allNotes.notesTitle));
  localStorage.setItem('archivedNotes', JSON.stringify(allNotes.archivedNotes));
  localStorage.setItem('archivedNotesTitle', JSON.stringify(allNotes.archivedNotesTitle));
  localStorage.setItem('trashedNotes', JSON.stringify(allNotes.trashedNotes));
  localStorage.setItem('trashedNotesTitle', JSON.stringify(allNotes.trashedNotesTitle));
}

function getFromLocalStorage() {
  allNotes.notes = JSON.parse(localStorage.getItem('notes')) || [];
  allNotes.notesTitle = JSON.parse(localStorage.getItem('notesTitle')) || [];
  allNotes.archivedNotes = JSON.parse(localStorage.getItem('archivedNotes')) || [];
  allNotes.archivedNotesTitle = JSON.parse(localStorage.getItem('archivedNotesTitle')) || [];
  allNotes.trashedNotes = JSON.parse(localStorage.getItem('trashedNotes')) || [];
  allNotes.trashedNotesTitle = JSON.parse(localStorage.getItem('trashedNotesTitle')) || [];
}
