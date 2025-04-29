const info = {
  nucleus: "The nucleus controls cell activities and contains genetic material (DNA).",
  mitochondria: "The mitochondria produce energy for the cell through cellular respiration.",
  cell_membrane: "The cell membrane protects the cell and controls what enters and exits.",
};

function showInfo(part) {
  const infoBox = document.getElementById('info-box');
  infoBox.style.display = 'block';
  infoBox.innerHTML = `<h3>${part.replace('_', ' ')}</h3><p>${info[part]}</p>`;
}
