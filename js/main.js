/** Help */
function log(message) {
  console.log('> ' + message);
}

/** App */
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/** Dropzone */
dropzones.forEach((dropzone) => {
  dropzone.addEventListener('dragenter', dragenter);
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
  dropzone.addEventListener('drop', drop);
});

function dragenter() {
  //log("DROPZONE: Enter in zone");
}

function dragover() {
  this.classList.add('over');
  const cardBeingDragged = document.querySelector('.is-dragging');

  this.appendChild(cardBeingDragged);
}

function dragleave() {
  this.classList.remove('over');
}

function drop() {
  this.classList.remove('over');
}

/** Cards */
cards.forEach((card) => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  this.classList.add('highlight');
  this.classList.add('is-dragging');
}
function drag() {
  // log("CARD: Is dragging");
}
function dragend() {
  this.classList.remove('highlight');
  this.classList.remove('is-dragging');
}
