const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

  showOnPage('<b>Is It Study Time?<b>')
  showOnPage('~~~~~~~')
  
  let studyTime = function (study) {

    let time = (study)
    timeMessage = ''
    
    if (time >= 9 <= 17) {
        timeMessage = 'study time. Here is the link to some studying music: https://www.youtube.com/watch?v=e97w-GHsRMY'
        } else if (time = 12) {
        timeMessage = 'lunch time. Come back when you are all fueled up.'
        } else if (time <= 8 >= 18) {
            timeMessage = 'not study time. Go have fun doing something else.'
        }
    
        return `It is currently ${timeMessage}`
    }
    
    
    
    let result = studyTime(10)
    showOnPage(result)

    

showOnPage('~~~~~~~')
showOnPage('Make sure your water bottle is filled, and stay hydrated')
showOnPage('If you are feeling frustrated or overwhelmed, try taking a break.')