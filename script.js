const descriptions = {
  "Nucleus": "The nucleus is the control center of the cell, containing DNA.",
  "Mitochondrion": "Mitochondria produce energy through cellular respiration.",
  "Golgi Apparatus": "The Golgi apparatus modifies and packages proteins.",
  "Endoplasmic Reticulum": "The ER helps in protein and lipid synthesis.",
  "Ribosome": "Ribosomes are the site of protein synthesis.",
  "Lysosome": "Lysosomes contain digestive enzymes to break down waste.",
  "Cell Membrane": "The membrane controls what enters and exits the cell."
};

function showDescription(organelle) {
  const descBox = document.getElementById("description-text");
  descBox.textContent = descriptions[organelle] || "Information not available.";
}

function switchCell(type) {
  const image = document.getElementById("cellImage");
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => tab.classList.remove("active"));

  if (type === "animal") {
    image.src = "animal_cell.png";
    tabs[0].classList.add("active");
  } else {
    image.src = "plant_cell.png";
    tabs[1].classList.add("active");
  }
}
