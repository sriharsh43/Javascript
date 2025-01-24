
let totalGlasses = 3; // Total number of glasses required per day
let glassesDrank = 0; // Counter for glasses consumed

function updateWaterTracker() {
  const remainingGlasses = totalGlasses - glassesDrank;
  for (let i = 1; i <= totalGlasses; i++) {
    const label = document.getElementById(`label${i}`);
    if (i <= glassesDrank) {
      label.textContent = "Drank";
      label.style.color = "red";
    } else {
      label.textContent = `Glass ${i}`;
      label.style.color = "white";
    }
  }

  console.log(`Glasses Drank: ${glassesDrank}, Remaining: ${remainingGlasses}`);
}

// Function to mark a glass as drank
function drinkGlass(glassId) {
  if (glassId > glassesDrank && glassId <= totalGlasses) {
    glassesDrank = glassId;
    updateWaterTracker();
  } else {
    console.error("Invalid glass ID or already drank.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateWaterTracker();
  document.getElementById("glass1").addEventListener("click", () => drinkGlass(1));
  document.getElementById("glass2").addEventListener("click", () => drinkGlass(2));
  document.getElementById("glass3").addEventListener("click", () => drinkGlass(3));
});
