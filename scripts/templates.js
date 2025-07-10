function getNoteTemplate(indexNote) {
  return `
  <div class="note">
    <h3>${allNotes.notesTitle[indexNote]}</h3>
    <p>${allNotes.notes[indexNote]}</p>
    <div class="note-btn-style">
      <img src="./assets/img/icons/icon-archive.png" class="note-icon" alt="Archivieren" onclick="moveNote(${indexNote}, 'notes', 'archivedNotes')">
      <img src="./assets/img/icons/icon-trash.png" class="note-icon" alt="In den Papierkorb" onclick="moveNote(${indexNote}, 'notes', 'trashedNotes')">
    </div>
  </div>`;
}

function getArchivedNoteTemplate(indexArchivedNote) {
  return `
  <div class="note">
    <h3>${allNotes.archivedNotesTitle[indexArchivedNote]}</h3>
    <p>${allNotes.archivedNotes[indexArchivedNote]}</p>
    <div class="note-btn-style">
      <img src="./assets/img/icons/icon-back.png" class="note-icon" alt="Zurück zu den Notizen" onclick="moveNote(${indexArchivedNote}, 'archivedNotes', 'notes')">
      <img src="./assets/img/icons/icon-trash.png" class="note-icon" alt="In den Papierkorb" onclick="moveNote(${indexArchivedNote}, 'archivedNotes', 'trashedNotes')">
    </div>
  </div>`;
}

function getTrashedNoteTemplate(indexTrashedNote) {
  return `
  <div class="note">
    <h3>${allNotes.trashedNotesTitle[indexTrashedNote]}</h3>
    <p>${allNotes.trashedNotes[indexTrashedNote]}</p>
    <div class="note-btn-style">
      <img src="./assets/img/icons/icon-back.png" class="note-icon" alt="Wiederherstellen" onclick="moveNote(${indexTrashedNote}, 'trashedNotes', 'notes')">
      <img src="./assets/img/icons/icon-delete.png" class="note-icon" alt="Endgültig löschen" onclick="deleteNote(${indexTrashedNote})">
    </div>
  </div>`;
}
