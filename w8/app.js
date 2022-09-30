function studyTime() {
  time = 7;
  timeMessage = "";

  if (time >= 9) {
    timeMessage =
      "study time. Here is the link to some studying music: https://www.youtube.com/watch?v=e97w-GHsRMY";
  } else if (time === 12) {
    timeMessage = "lunch time. Come back when you are all fueled up.";
  } else if (time <= 8) {
    timeMessage = "not study time. Go have fun or do something else.";
  } else if (time <= 17) {
    timeMessage =
      "study time. Here is the link to some studying music: https://www.youtube.com/watch?v=e97w-GHsRMY";
  }

  return timeMessage;
}

const showTime = document.createElement("h1");
showTime.innerText = `It is currently ${studyTime()}`;
document.body.appendChild(showTime);

const assignments = ["devX", "learnTogetherX", "CodeAlongX", "caseStudyX"];

let toDoDisplay = document.createElement("button");
toDoDisplay.innerHTML = "Number of Things To Do";
document.body.appendChild(toDoDisplay);

toDoDisplay.addEventListener("click", function () {
  const todoValue = document.createElement("h1");
  todoValue.innerHTML = `You have ${assignments.length} things left to do`;
  document.body.appendChild(todoValue);
});

document
  .querySelector("#name-input-text")
  .addEventListener("submit", function (you) {
    you.preventDefault();
    const userGreeting = document.createElement("h1");
    userGreeting.innerHTML = `Welcome, ${you.target.elements.userName.value}. I hope you are having a good day today.`;
    document.body.appendChild(userGreeting);
  });

const waterCheck = document.createElement("h1");
waterCheck.innerHTML = "Make sure you have water. Stay hydrated!";
document.body.appendChild(waterCheck);

const mindCheck = document.createElement("h1");
mindCheck.innerHTML =
  "If you are feeling frustrated or overwhelmed, try taking a break.";
document.body.appendChild(mindCheck);
