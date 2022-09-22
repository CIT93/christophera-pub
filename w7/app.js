const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

  const studyTime = function () {

    const time = 7
    timeMessage = ''
    
    if (time >= 9) {
        timeMessage = 'study time. Here is the link to some studying music: https://www.youtube.com/watch?v=e97w-GHsRMY'
        } else if (time === 12) {
        timeMessage = 'lunch time. Come back when you are all fueled up.'
        } else if (time <= 8) {
            timeMessage = 'not study time. Go have fun or do something else.'
        } else if (time <= 17) {
        timeMessage = 'study time. Here is the link to some studying music: https://www.youtube.com/watch?v=e97w-GHsRMY'
        }
    
        return showOnPage(`It is currently ${timeMessage}`)
    }
    
    studyTime()

     const assignments = ['devX', 'learnTogetherX', 'CodeAlongX', 'caseStudyX']

     showOnPage(`You currently have ${assignments.length} assignments to do.`)
