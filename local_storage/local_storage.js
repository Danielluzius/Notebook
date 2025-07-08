let myData = ['Banana', 'not Banana', 'Apple']; // Initial data

function init() {
  getFromLocalStorage(); // Bekommt die Daten aus dem Local Storage
  render(); // Rendert die Daten auf der Seite
}

function saveData() {
  // Speichert die Daten in den Local Storage
  let inputRef = document.getElementById('data_input'); // Referenz zum Input-Feld

  if (inputRef.value != '') {
    // Überprüft, ob das Input-Feld nicht leer ist
    myData.push(inputRef.value); // Fügt den Wert des Input-Feldes zum Array hinzu
  }

  saveToLocalStorage(); // Speichert die Daten im Local Storage

  render(); // Rendert die Daten auf der Seite
  inputRef.value = ''; // Leert das Input-Feld
}

function saveToLocalStorage() {
  // Speichert die Daten im Local Storage
  localStorage.setItem('myData', JSON.stringify(myData)); // Speichert das Array als JSON-String
}

function getFromLocalStorage() {
  // Holt die Daten aus dem Local Storage
  let myArr = JSON.parse(localStorage.getItem('myData')); // Holt die Daten und wandelt sie von JSON zurück in ein Array um
  if (myArr === null) {
    // Überprüft, ob die Daten im Local Storage leer sind
    myArr = []; // Wenn ja, initialisiert es ein leeres Array
  }
  myData = myArr; // Setzt das globale Array auf die Daten aus dem Local Storage
}

function render() {
  // Rendert die Daten auf der Seite
  let contentRef = document.getElementById('content'); // Referenz zum Content-Bereich
  contentRef.innerHTML = ''; // Leert den Content-Bereich

  for (let index = 0; index < myData.length; index++) {
    // Iteriert über das Array
    contentRef.innerHTML += `<p>${myData[index]}</p>`; // Fügt jeden Eintrag als Paragraphen-Element hinzu
  }
}
