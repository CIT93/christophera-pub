const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

  //Mail Checking code
  //print "Should I check the mail today?"
  //function one: Is it the right day to check mail
  //print message indicating whether to check mail or not
  //function two: Am I expecting something?
  //print message indicating whether to be on the lookout for packages or not.

  showOnPage('<b>Testy<b>')