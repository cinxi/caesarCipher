// const problems = {
//   1: { text: "uhdolwb", shift: "+3", hint: "What we perceive as true." }, // reality
//   2: { text: "vbvwhp", shift: "+3", hint: "A structured set of interconnected components." }, // system
//   3: { text: "iohxu", shift: "+3", hint: "A French word for flower." }, // fleur
//   4: { text: "prqhb", shift: "+3", hint: "Used for transactions." }, // money
//   5: { text: "olih", shift: "+3", hint: "The essence of existence." }, // life

//   6: { text: "ohgf", shift: "+7", hint: "Slightly blurry or foggy." }, // hazy
//   7: { text: "edbtvgpcpit", shift: "+15", hint: "A fruit with juicy seeds." }, // pomegranate
//   8: { text: "jpwoly", shift: "+7", hint: "A secretive code system." }, // cipher
//   9: { text: "ofhjpuao", shift: "+7", hint: "A fragrant flower." }, // hyacinth
//   10: { text: "vpxp", shift: "+15", hint: "A mythological Earth mother." }, // gaia

//   11: { text: "otkbgqhstcd", shift: "+25", hint: "A word for great physical beauty." }, // pulchritude
//   12: { text: "dktte", shift: "+19", hint: "A traditional African village." }, // kraal
//   13: { text: "fecfeki", shift: "+16", hint: "Someone who acts self-important." }, // pompous
//   14: { text: "vnvdhew", shift: "+19", hint: "A husband whose spouse is unfaithful." }, // cuckold
//   15: { text: "zuffuws", shift: "+20", hint: "A mistaken belief or error in reasoning." } // fallacy
// };



// let currentLevel = null;


// const completedLevels = JSON.parse(localStorage.getItem("completedLevels")) || [];

// function markCompletedLevels() {
//   const levelButtons = document.querySelectorAll(".level-btn");
//   levelButtons.forEach((button, index) => {
//     const level = index + 1;
//     if (completedLevels.includes(level)) {
//       button.classList.add("completed"); // Add a class for completed levels
//     }
//   });
// }

// function startLevel(level) {
//     const problem = problems[level];
//     if (!problem) {
//         alert("This level is not implemented yet!");
//         return;
//     }

//     currentLevel = level;

//     document.getElementById("levelSolver").style.display = "flex";
//     document.getElementById("problemText").innerHTML = `<strong>${problem.text}</strong>`;
//     document.getElementById("problemShift").textContent = `Shift: ${problem.shift}`;
//     document.getElementById("hintText").textContent = problem.hint;
//     document.getElementById("userAnswer").value = ""; // Clear previous input
// }

// function closeLevelSolver() {
//     document.getElementById("levelSolver").style.display = "none";
//     currentLevel = null;
// }

// function toggleHint() {
//     const hintText = document.getElementById("hintText");
//     hintText.style.visibility = hintText.style.visibility === "visible" ? "hidden" : "visible";
// }
// function checkAnswer() {
//   if (!currentLevel) return;

//   const userAnswer = document.getElementById("userAnswer").value.trim();
//   const problem = problems[currentLevel];

//   const shift = parseInt(problem.shift.replace("+", ""));

//   const decodedAnswer = decodeCipher(problem.text, shift);

//   console.log(`Level: ${currentLevel}`);
//   console.log(`Cipher Text: ${problem.text}`);
//   console.log(`Decoded Answer: ${decodedAnswer}`);
//   console.log(`User Answer: ${userAnswer}`);

//   if (userAnswer.toLowerCase() === decodedAnswer.toLowerCase()) {
//     alert("Correct!");

//     // Move to the next level
//     const nextLevel = currentLevel + 1;

//     if (problems[nextLevel]) {
//         startLevel(nextLevel); // Start the next level
//     } else {
//         alert("Congratulations! You completed all levels.");
//         closeLevelSolver();
//     }
// } else {
//     alert("Incorrect. Try again!");
// }
// }


// function decodeCipher(text, shift) {
//   const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const alphabetLower = "abcdefghijklmnopqrstuvwxyz";

//   // Ensure the shift wraps correctly for negative or large values
//   const shiftAmount = shift >= 0 ? shift % 26 : (26 + (shift % 26)) % 26;

//   return text
//       .split("")
//       .map((char) => {
//           if (alphabetUpper.includes(char)) {
//               // Decode uppercase letters
//               const index = (alphabetUpper.indexOf(char) - shiftAmount + 26) % 26;
//               return alphabetUpper[index];
//           } else if (alphabetLower.includes(char)) {
//               // Decode lowercase letters
//               const index = (alphabetLower.indexOf(char) - shiftAmount + 26) % 26;
//               return alphabetLower[index];
//           } else {
//               // Non-alphabetic characters remain unchanged
//               return char;
//           }
//       })
//       .join("");
// }



const problems = {
  1: { text: "uhdolwb", shift: "+3", hint: "What we perceive as true." }, // reality
  2: { text: "vbvwhp", shift: "+3", hint: "A structured set of interconnected components." }, // system
  3: { text: "iohxu", shift: "+3", hint: "A French word for flower." }, // fleur
  4: { text: "prqhb", shift: "+3", hint: "Used for transactions." }, // money
  5: { text: "olih", shift: "+3", hint: "The essence of existence." }, // life

  6: { text: "ohgf", shift: "+7", hint: "Slightly blurry or foggy." }, // hazy
  7: { text: "edbtvgpcpit", shift: "+15", hint: "A fruit with juicy seeds." }, // pomegranate
  8: { text: "jpwoly", shift: "+7", hint: "A secretive code system." }, // cipher
  9: { text: "ofhjpuao", shift: "+7", hint: "A fragrant flower." }, // hyacinth
  10: { text: "vpxp", shift: "+15", hint: "A mythological Earth mother." }, // gaia

  11: { text: "otkbgqhstcd", shift: "+25", hint: "A word for great physical beauty." }, // pulchritude
  12: { text: "dktte", shift: "+19", hint: "A traditional African village." }, // kraal
  13: { text: "fecfeki", shift: "+16", hint: "Someone who acts self-important." }, // pompous
  14: { text: "vnvdhew", shift: "+19", hint: "A husband whose spouse is unfaithful." }, // cuckold
  15: { text: "zuffuws", shift: "+20", hint: "A mistaken belief or error in reasoning." } // fallacy
};

let currentLevel = null;
let completedLevels = [];

function startLevel(level) {
  const problem = problems[level];
  if (!problem) {
    alert("This level is not implemented yet!");
    return;
  }

  currentLevel = level;
  // completedLevels.push(level);
  // markLevelAsCompleted(level);

  document.getElementById("levelSolver").style.display = "flex";
  document.getElementById("problemText").innerHTML = `<strong>${problem.text}</strong>`;
  document.getElementById("problemShift").textContent = `Shift: ${problem.shift}`;
  document.getElementById("hintText").textContent = problem.hint;
  document.getElementById("userAnswer").value = ""; // Clear previous input
}

function closeLevelSolver() {
  document.getElementById("levelSolver").style.display = "none";
  currentLevel = null;
}

function toggleHint() {
  const hintText = document.getElementById("hintText");
  const hintIcon = document.getElementById("hintIcon");
  if (hintText.style.visibility === "visible") {
    hintText.style.visibility = "hidden";
    hintIcon.textContent = "💡";
  } else {
    hintText.style.visibility = "visible";
    hintIcon.textContent = "❌";
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
  const correctAnswer = getAnswerForLevel(currentLevel);
  
  // Get the answer checker div
  const answerChecker = document.querySelector('.answerChecker p');
  
  if (userAnswer === correctAnswer) {
    answerChecker.textContent = "Correct!";
    answerChecker.style.color = "green"; // Set text color to green for correct answer
    
    markLevelAsCompleted(currentLevel);
    
    // Move to the next level
    const nextLevel = currentLevel + 1;
    if (problems[nextLevel]) {
      startLevel(nextLevel); // Start the next level
    } else {
      answerChecker.textContent = "Congratulations! You've completed all levels!";
      answerChecker.style.color = "blue"; // Set text color to blue for the completion message
    }
  } else {
    answerChecker.textContent = "Incorrect. Try again!";
    answerChecker.style.color = "red"; // Set text color to red for incorrect answer
  }
  
  // Optionally, clear the input field after checking the answer
  document.getElementById("userAnswer").value = "";
}

function getAnswerForLevel(level) {
  const problem = problems[level];
  const shift = parseInt(problem.shift.replace("+", ""));
  return decodeCipher(problem.text, shift).toLowerCase();
}


function getAnswerForLevel(level) {
  const answers = {
    1: "reality",
    2: "system",
    3: "fleur",
    4: "money",
    5: "life",
    6: "hazy",
    7: "pomegranate",
    8: "cipher",
    9: "hyacinth",
    10: "gaia",
    11: "pulchritude",
    12: "kraal",
    13: "pompous",
    14: "cuckold",
    15: "fallacy"
  };
  return answers[level];
}

function markLevelAsCompleted(level) {
  const levelButton = document.querySelector(`button[level="${level}"]`);
  if (levelButton) {
    levelButton.style.backgroundColor = "#985305"; 
    levelButton.disabled = true; 
  }
}

function resetLevelButton(level) {
  const levelButton = document.querySelector(`button[level="${level}"]`);
  if (levelButton) {
    levelButton.style.backgroundColor = "#a97103"; 
    levelButton.disabled = false; 
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const levelButtons = document.querySelectorAll(".level-btn");
  levelButtons.forEach(button => {
    const level = parseInt(button.textContent);
    button.setAttribute("level", level);
    
    if (completedLevels.includes(level)) {
      button.style.backgroundColor = "#26b5fc"; // Mark as completed
      button.disabled = true; // Disable the button for already completed levels
    }
  });
});
