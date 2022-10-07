let time = ''

const assignments = ["devX", "learnTogetherX", "CodeAlongX", "caseStudyX"];

let toDoDisplay = document.createElement("button");
toDoDisplay.innerHTML = "Number of Things To Do";
document.body.appendChild(toDoDisplay);

toDoDisplay.addEventListener("click", function () {
  const todoValue = document.createElement("h1");
  todoValue.innerHTML = `You have ${assignments.length} things left to do`;
  document.body.appendChild(todoValue);
});

document.querySelector("#name-input-text").addEventListener("submit", function (you) {
    you.preventDefault();
    const userGreeting = document.createElement("h1");
    userGreeting.innerHTML = `Welcome, ${you.target.elements.userName.value}. I hope you are having a good day today.`;
    document.body.appendChild(userGreeting);
    
    let time = you.target.elements.inputTime.value;

    const timeGreeting = document.createElement("h1")
    timeGreeting.innerHTML = `It is currently ${studyTime()}`
    document.body.appendChild(timeGreeting)
  });

const waterCheck = document.createElement("h1");
waterCheck.innerHTML = "Make sure you have water. Stay hydrated!";
document.body.appendChild(waterCheck);

const mindCheck = document.createElement("h1");
mindCheck.innerHTML =
  "If you are feeling frustrated or overwhelmed, try taking a break.";
document.body.appendChild(mindCheck);

// Local storage implementation and steps
//Create localStorage.setItem
//Read localStorage.getItem
//Update localStorage.removeItem
//Delete localStorage.clear


