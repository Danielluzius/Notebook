function getNoteTemplate(indexNote) {
  return `
  <div class="note">
    <h3>${notesTitle[indexNote]} </h3>
    <p>${notes[indexNote]}</p>
    <div class="note-btn-style">
      <button class="note-btn" onclick="pushNoteToArchive(${indexNote})">A</button>
      <button class="note-btn" onclick="pushNoteToTrash(${indexNote})">X</button>
    </div>
  </div>`;
}

function getArchivedNoteTemplate(indexArchivedNote) {
  return `
  <div class="note">
    <h3>${archivedNotesTitle[indexArchivedNote]} </h3>
    <p>${archivedNotes[indexArchivedNote]}</p>
    <div class="note-btn-style">
      <button class="note-btn" onclick="pushArchivedNoteToNotes(${indexArchivedNote})">N</button>
      <button class="note-btn" onclick="pushArchivedNoteToTrash(${indexArchivedNote})">X</button>
    </div>
  </div>`;
}

function getTrashedNoteTemplate(indexTrashedNote) {
  return `
  <div class="note">
    <h3>${trashedNotesTitle[indexTrashedNote]} </h3>
    <p>${trashedNotes[indexTrashedNote]}</p>
    <div class="note-btn-style">
      <button class="note-btn" onclick="pushRestoredNoteToNotes(${indexTrashedNote})">N</button>
      <button class="note-btn" onclick="deleteNote(${indexTrashedNote})">X</button>
    </div>
  </div>`;
}
