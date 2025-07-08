let notesTitle = []; // Array für Notizen Titel
let notes = []; // Array für Notizen Inhalt
let archivedNotesTitle = []; // Array für archivierte Notizen Titel
let archivedNotes = []; // Array für archivierte Notizen Inhalt
let trashedNotesTitle = []; // Array für Papierkorb Notizen Titel
let trashedNotes = []; // Array für Papierkorb Notizen Inhalt

function init() {
  saveToLocalStorage();
  getFromLocalStorage();
  renderNotes();
  renderArchivedNotes();
  renderTrashedNotes();
}

// Notizen anzeigen
// Diese Funktion wird aufgerufen, um die Notizen im HTML anzuzeigen.
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

  init();
}

// Notizen in den Papierkorb verschieben
function pushNoteToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashedNotes.push(trashNote);

  let trashNotesTitle = notesTitle.splice(indexNote, 1);
  trashedNotesTitle.push(trashNotesTitle);

  init();
}

// archivierte Notizen zurück in die Notizen verschieben
function pushArchivedNoteToNotes(indexArchivedNote) {
  let restoredNote = archivedNotes.splice(indexArchivedNote, 1);
  notes.push(restoredNote);

  let restoredTitle = archivedNotesTitle.splice(indexArchivedNote, 1);
  notesTitle.push(restoredTitle);

  init();
}

// archivierte Notizen in den Papierkorb verschieben
function pushArchivedNoteToTrash(indexArchivedNote) {
  let trashedNote = archivedNotes.splice(indexArchivedNote, 1);
  trashedNotes.push(trashedNote);

  let trashedTitle = archivedNotesTitle.splice(indexArchivedNote, 1);
  trashedNotesTitle.push(trashedTitle);

  init();
}

// Papierkorb Notizen zurück in die Notizen verschieben
function pushRestoredNoteToNotes(indexTrashedNote) {
  let restoredNote = trashedNotes.splice(indexTrashedNote, 1);
  notes.push(restoredNote);

  let restoredTitle = trashedNotesTitle.splice(indexTrashedNote, 1);
  notesTitle.push(restoredTitle);

  init();
}

// Notizen löschen
function deleteNote(indexTrashedNote) {
  trashedNotesTitle.splice(indexTrashedNote, 1);
  trashedNotes.splice(indexTrashedNote, 1);

  init();
}

// Funktion zum Speichern der Notizen
function saveData() {
  let titleInputRef = document.getElementById('note_title_input');
  let contentInputRef = document.getElementById('note_content_input');

  if (titleInputRef.value != '' && contentInputRef.value != '') {
    notes.push(contentInputRef.value);
  }

  init();
  contentInputRef.value = '';
}

// Funktion zum Speichern der Notizen in den Local Storage
// Diese Funktion wird aufgerufen, um die Notizen im Local Storage zu speichern.

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

// Diese Funktion wird aufgerufen, um die Notizen aus dem Local Storage zu laden.
// Sie überprüft, ob die Notizen im Local Storage vorhanden sind und lädt sie in die

function getNotesFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem('notes'));
  let myArrTitle = JSON.parse(localStorage.getItem('notesTitle'));

  if (myArr === null) {
    myArr = [];
  }
  if (myArrTitle === null) {
    myArrTitle = [];
  }
  notes = myArr;
  notesTitle = myArrTitle;
}

function getArchivedFromLocalStorage() {
  let myArrArchived = JSON.parse(localStorage.getItem('archivedNotes'));
  let myArrArchivedTitle = JSON.parse(localStorage.getItem('archivedNotesTitle'));

  if (myArrArchived === null) {
    myArrArchived = [];
  }
  if (myArrArchivedTitle === null) {
    myArrArchivedTitle = [];
  }
  archivedNotes = myArrArchived;
  archivedNotesTitle = myArrArchivedTitle;
}

function getTrashedFromLocalStorage() {
  let myArrTrashed = JSON.parse(localStorage.getItem('trashedNotes'));
  let myArrTrashedTitle = JSON.parse(localStorage.getItem('trashedNotesTitle'));

  if (myArrTrashed === null) {
    myArrTrashed = [];
  }
  if (myArrTrashedTitle === null) {
    myArrTrashedTitle = [];
  }
  trashedNotes = myArrTrashed;
  trashedNotesTitle = myArrTrashedTitle;
}
