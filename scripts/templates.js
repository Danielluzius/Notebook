function getNoteTemplate(indexNote) {
  return `<p>+ title: ${notesTitle[indexNote]} -> ${notes[indexNote]} <button onclick="pushNoteToTrash(${indexNote})">X</button></p>`;
}

function getTrashedNoteTemplate(indexTrashedNote) {
  return `<p>+ title: ${trashedNotesTitle[indexTrashedNote]} -> ${trashedNotes[indexTrashedNote]} <button onclick="deleteNote(${indexTrashedNote})">X</button></p>`;
}
