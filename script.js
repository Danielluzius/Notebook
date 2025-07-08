// notizen anzeigen lassen
let notesTitle = ['Gelb', 'Grün', 'Orange'];
let notes = ['Banana', 'Apple', 'Orange'];

function init() {
  renderNotes();
}

let trashedNotesTitle = [];
let trashedNotes = [];

function renderNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = '';

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashedNotes() {
  let trashedContentRef = document.getElementById('trash_content');
  trashedContentRef.innerHTML = '';

  for (let indexTrashedNote = 0; indexTrashedNote < trashedNotes.length; indexTrashedNote++) {
    trashedContentRef.innerHTML += getTrashedNoteTemplate(indexTrashedNote);
  }
}

// notizen hinzufügen

function addNote() {
  let noteInputRef = document.getElementById('note_input');
  let noteInput = noteInputRef.value;

  notes.push(noteInput);

  renderNotes();

  noteInputRef.value = '';
}

// notizen Archivieren

function pushNoteToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashedNotes.push(trashNote);

  let trashNotesTitle = notesTitle.splice(indexNote, 1);
  trashedNotesTitle.push(trashNotesTitle);
  renderNotes();
  renderTrashedNotes();
}

// notizen löschen

function deleteNote(indexTrashedNote) {
  trashedNotes.splice(indexTrashedNote, 1);
  renderTrashedNotes();
}

// Local Storage

function saveData() {
  let inputRef = document.getElementById('note_input');

  if (inputRef.value != '') {
    notes.push(inputRef.value);
  }

  saveToLocalStorage();

  renderNotes();
  inputRef.value = '';
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
