function studyTime() {
  
    timeMessage = "";
  
    if (time >= 9) {
      timeMessage =
        `${time} 'o clock. Here is the link to some studying music: https://www.youtube.com/watch?v=e97w-GHsRMY`;
    } else if (time === 12) {
      timeMessage = `${time} 'o clock. Come back when you are all fueled up.`;
    } else if (time <= 8) {
      timeMessage = `${time} 'o clock. Go have fun or do something else.`;
    } else if (time <= 17) {
      timeMessage =
        `${time} 'o clock. Here is the link to some studying music: https://www.youtube.com/watch?v=e97w-GHsRMY`;
    }
  
    return timeMessage;
  }