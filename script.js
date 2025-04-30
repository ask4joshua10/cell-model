// script.js

const organelleDescriptions = {
    "Nucleus": "The control center of the cell, containing DNA and directing cellular activities.",
    "Mitochondrion": "The powerhouse of the cell, responsible for producing energy (ATP).",
    "Golgi Apparatus": "Packages and ships proteins and lipids in the cell.",
    "Endoplasmic Reticulum": "Helps with protein and lipid synthesis. Comes in rough (with ribosomes) and smooth types.",
    "Ribosome": "Small structures that make proteins.",
    "Lysosome": "Contains digestive enzymes to break down waste.",
    "Cell Membrane": "Protects the cell and controls what enters and exits."
};

function showDescription(organelle) {
    const descBox = document.getElementById("description-text");
    descBox.innerText = organelleDescriptions[organelle] || "No description available.";
}

function switchCell(type) {
    const image = document.getElementById("cellImage");
    const buttons = document.querySelectorAll(".tab-buttons button");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (type === "animal") {
        image.src = "animal_cell.png";
        buttons[0].classList.add("active");
    } else if (type === "plant") {
        image.src = "plant_cell.png";
        buttons[1].classList.add("active");
    }

    // Optional: Update hotspots if different between cell types
}
