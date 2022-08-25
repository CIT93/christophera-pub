const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
  
  let studyTime = function (setupTime) {

    let clock = (setupTime) 
    workMessage = ''

    if (clock = 12) {
        workMessage = 'lunch time'
        } else if (clock >= 9 <= 17) {
        workMessage = 'study time'
        } else {
        workMessage = 'not study time'
        }
    
        return `It is currently ${workMessage}!`
    }
    
    let result = studyTime(12)
    showOnPage(result)

showOnPage('Make sure your water bottle is filled, and stay hydrated')
showOnPage('If you are feeling frustrated or overwhelmed, try taking a break.')