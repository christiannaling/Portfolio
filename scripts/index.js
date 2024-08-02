const careers = ['Web Developer', 'Front-End Developer'];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++
  const containerElement = document.querySelector('.text-career').innerHTML = `<h1>I am Mark Christian M. Naling  <br> &#160;&#160;&#160;&#160;&#160;${careers[careerIndex].slice(0,1) === 'I' ? 'an' : 'a'} 
  ${careers [careerIndex].slice(0,characterIndex)}</h1>`;
  
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}