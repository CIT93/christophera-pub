const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
  
  //display "Study Time"

  showOnPage('<b>Study Time</b>')
  showOnPage('~~~~~~~~~')
  
  // make if/then statement for determining study time
  //provide link for lofi stream
 
let studyTimeVar = 9

if (studyTimeVar >= 9 && studyTimeVar <= 17){
  showOnPage('It is study time. Here is the link to some study music: https://www.youtube.com/watch?v=jfKfPfyJRdk')
} else if (studyTimeVar <= 8 || studyTimeVar >= 10) {
showOnPage('It is not study time. Go do something else, and have fun!')
} else {
  lunch = 'lunch'
  if (studyTimeVar = lunch) {
  showOnPage('It is lunch time')
}}

showOnPage('Make sure your water bottle is filled, and stay hydrated')
showOnPage('If you are feeling frustrated or overwhelmed, try taking a break.')