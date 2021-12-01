// Variables
let myInput = document.querySelector('.header input'),
   addbtn = document.querySelector('.header span'),
   tasksList = document.querySelector('.tasks-list'),
   noTasks = document.querySelector('.tasks-list .no-tasks'),
   tasksDone = document.querySelector('.footer .completed span'),
   allTasks = document.querySelector('.footer .all-tasks span'),
   doneNum = 0;

window.onload = function () {myInput.focus()};

addbtn.onclick = () => {
   if (myInput.value === "") {
      return false;
   } else {
      // 1- Removing no tasks div
      noTasks.remove();
      // 2- Creating main task div
      let myTask = document.createElement('div');
      myTask.classList.add('task');
      // 3- Creating task number
      let mySpanNum = document.createElement('span');
      mySpanNum.classList.add('task-num');
      // 4- Creating task content
      let mySpanCont = document.createElement('span');
      mySpanCont.classList.add('task-cont');
      let taskCont = document.createTextNode(myInput.value);
      mySpanCont.append(taskCont);
      // 5- Creating task done
      let mySpanDone = document.createElement('span');
      mySpanDone.classList.add('task-done');
      mySpanDone.innerText = 'completed';
      // 6- Putting all spans in the main div
      myTask.append(mySpanNum);
      myTask.append(mySpanCont);
      myTask.append(mySpanDone);
      // 7- Putting task div in tasks list
      tasksList.append(myTask);
      // 8- Creating array of tasks
      let tasksArr = Array.from(document.querySelectorAll('.tasks-list div'));
      // Setting task number
      mySpanNum.innerText = tasksArr.indexOf(mySpanNum.parentNode) + 1;
      // Setting the number of tasks
      allTasks.innerText = tasksArr.length;
      myInput.value = '';
      myInput.focus();
   }
}

window.onclick = (e) => {
   if(e.target.classList.contains('task-done')){
      e.target.parentNode.classList.add('done');
      e.target.classList.add('disabled');
      doneNum++;
      tasksDone.innerText = doneNum;
   }
}