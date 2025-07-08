function getNoteTemplate(indexNote) {
  return `
  <div class="note">
    <h3>${notesTitle[indexNote]} </h3>
    <p>${notes[indexNote]}</p>
    <div>
      <button onclick="pushNoteToArchive(${indexNote})">Archivieren</button>
      <button onclick="pushNoteToTrash(${indexNote})">Papierkorb</button>
    </div>
  </div>`;
}

function getArchivedNoteTemplate(indexArchivedNote) {
  return `
  <div class="note">
    <h3>${archivedNotesTitle[indexArchivedNote]} </h3>
    <p>${archivedNotes[indexArchivedNote]}</p>
    <div>
      <button onclick="pushArchivedNoteToNotes(${indexArchivedNote})">Notizen</button>
      <button onclick="pushArchivedNoteToTrash(${indexArchivedNote})">Papierkorb</button>
    </div>
  </div>`;
}

function getTrashedNoteTemplate(indexTrashedNote) {
  return `
  <div class="note">
    <h3>${trashedNotesTitle[indexTrashedNote]} ${trashedNotes[indexTrashedNote]} </h3>
    <p>${trashedNotes[indexTrashedNote]}</p>
    <div>
      <button onclick="pushRestoredNoteToNotes(${indexTrashedNote})">Zurück zu Notizen</button>
      <button onclick="deleteNote(${indexTrashedNote})">Endgültig Löschen</button>
    </div>
  </div>`;
}
