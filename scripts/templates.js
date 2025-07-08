function getNoteTemplate(indexNote) {
  return `
  <div class="note">
    <h3>${notesTitle[indexNote]}</h3>
    <p>${notes[indexNote]}</p>
    <div class="note-btn-style">
      <img src="./assets/img/icons/icon-archive.png" class="note-icon" alt="Archivieren" onclick="pushNoteToArchive(${indexNote})">
      <img src="./assets/img/icons/icon-trash.png" class="note-icon" alt="In den Papierkorb" onclick="pushNoteToTrash(${indexNote})">
    </div>
  </div>`;
}

function getArchivedNoteTemplate(indexArchivedNote) {
  return `
  <div class="note">
    <h3>${archivedNotesTitle[indexArchivedNote]}</h3>
    <p>${archivedNotes[indexArchivedNote]}</p>
    <div class="note-btn-style">
      <img src="./assets/img/icons/icon-back.png" class="note-icon" alt="Zurück zu den Notizen" onclick="pushArchivedNoteToNotes(${indexArchivedNote})">
      <img src="./assets/img/icons/icon-trash.png" class="note-icon" alt="In den Papierkorb" onclick="pushArchivedNoteToTrash(${indexArchivedNote})">
    </div>
  </div>`;
}

function getTrashedNoteTemplate(indexTrashedNote) {
  return `
  <div class="note">
    <h3>${trashedNotesTitle[indexTrashedNote]}</h3>
    <p>${trashedNotes[indexTrashedNote]}</p>
    <div class="note-btn-style">
      <img src="./assets/img/icons/icon-back.png" class="note-icon" alt="Wiederherstellen" onclick="pushRestoredNoteToNotes(${indexTrashedNote})">
      <img src="./assets/img/icons/icon-delete.png" class="note-icon" alt="Endgültig löschen" onclick="deleteNote(${indexTrashedNote})">
    </div>
  </div>`;
}
