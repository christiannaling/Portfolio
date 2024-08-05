//sidebar
function showSidebar() {
  const sidebar = document.querySelector('.side-bar');
  sidebar.style.display = 'flex';
}

function closeSidebar(){
  const sidebar = document.querySelector('.side-bar');
  sidebar.style.display = 'none';
}



//text animation
const careers = ['Web Developer', 'Front-End Developer'];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  let careerIndex = 0;
    let characterIndex = 0; // Start from the beginning
    let isAdding = true; // Flag to track whether we are adding or removing characters

    function updateText() {
      const containerElement = document.querySelector('.text-name');
      containerElement.innerHTML = `<div>I am Mark Christian M. Naling <br> <span class="text-career">${careers[careerIndex].slice(0, 1) === 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(0, characterIndex)}</span></div>`;

      if (isAdding) {
        characterIndex++; // Increment to add characters
        // Check if we have added all characters
        if (characterIndex > careers[careerIndex].length) {
          isAdding = false; // Switch to removing characters
          characterIndex = careers[careerIndex].length; // Reset to full length to start removing
        }
      } else {
        characterIndex--; // Decrement to remove characters
        // Check if we have removed all characters
        if (characterIndex < 0) {
          careerIndex++; // Move to the next career
          characterIndex = 0; // Reset characterIndex to start over with the next career
          isAdding = true; // Switch back to adding characters
        }
      }

      // Loop back to the beginning of careers if all are displayed
      if (careerIndex === careers.length) {
        careerIndex = 0; // Reset to the first career
      }

      setTimeout(updateText, 200); // Call the function again after a delay
    }

    // Start the text update
    updateText();
}