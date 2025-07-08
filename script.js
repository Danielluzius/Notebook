let notesTitle = []; // Array für Notizen Titel
let notes = []; // Array für Notizen Inhalt
let archivedNotesTitle = []; // Array für archivierte Notizen Titel
let archivedNotes = []; // Array für archivierte Notizen Inhalt
let trashedNotesTitle = []; // Array für Papierkorb Notizen Titel
let trashedNotes = []; // Array für Papierkorb Notizen Inhalt

function init() {
  renderNotes();
}

// Notizen Rendern
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

// Notizen hinzufügen
// Diese Funktion wird aufgerufen, wenn der Benutzer eine Notiz hinzufügen möchte.
function addNote() {
  let titleInputRef = document.getElementById('note_title_input');
  let titleInput = titleInputRef.value;
  let noteInputRef = document.getElementById('note_content_input');
  let noteInput = noteInputRef.value;

  notes.push(noteInput);
  notesTitle.push(titleInput);

  renderNotes();

  titleInputRef.value = '';
  noteInputRef.value = '';
}

// Notizen in das Archiv verschieben
function pushNoteToArchive(indexNote) {
  let archivedNote = notes.splice(indexNote, 1);
  archivedNotes.push(archivedNote);

  let archivedTitle = notesTitle.splice(indexNote, 1);
  archivedNotesTitle.push(archivedTitle);
  renderNotes();
  renderArchivedNotes();
}

// Notizen in den Papierkorb verschieben
function pushNoteToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashedNotes.push(trashNote);

  let trashNotesTitle = notesTitle.splice(indexNote, 1);
  trashedNotesTitle.push(trashNotesTitle);
  renderNotes();
  renderTrashedNotes();
}

// archivierte Notizen zurück in die Notizen verschieben
function pushArchivedNoteToNotes(indexArchivedNote) {
  let restoredNote = archivedNotes.splice(indexArchivedNote, 1);
  notes.push(restoredNote);

  let restoredTitle = archivedNotesTitle.splice(indexArchivedNote, 1);
  notesTitle.push(restoredTitle);

  renderNotes();
  renderArchivedNotes();
}

// archivierte Notizen in den Papierkorb verschieben
function pushArchivedNoteToTrash(indexArchivedNote) {
  let trashedNote = archivedNotes.splice(indexArchivedNote, 1);
  trashedNotes.push(trashedNote);

  let trashedTitle = archivedNotesTitle.splice(indexArchivedNote, 1);
  trashedNotesTitle.push(trashedTitle);

  renderArchivedNotes();
  renderTrashedNotes();
}

// Papierkorb Notizen zurück in die Notizen verschieben
function pushRestoredNoteToNotes(indexTrashedNote) {
  let restoredNote = trashedNotes.splice(indexTrashedNote, 1);
  notes.push(restoredNote);

  let restoredTitle = trashedNotesTitle.splice(indexTrashedNote, 1);
  notesTitle.push(restoredTitle);

  renderNotes();
  renderTrashedNotes();
}

// Notizen löschen
function deleteNote(indexTrashedNote) {
  trashedNotes.splice(indexTrashedNote, 1);
  renderTrashedNotes();
}

// Funktion zum Speichern der Notizen
function saveData() {
  let titleInputRef = document.getElementById('note_title_input');
  let contentInputRef = document.getElementById('note_content_input');

  if (titleInputRef.value != '' && contentInputRef.value != '') {
    notes.push(contentInputRef.value);
  }

  saveToLocalStorage();

  renderNotes();
  contentInputRef.value = '';
}

function saveToLocalStorage() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function getFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem('notes'));
  if (myArr === null) {
    myArr = [];
  }
  notes = myArr;
}
