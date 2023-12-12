import { createMainPage } from "./mainpage";
import { addingProTask } from "./projectsTasks";

const body = document.body;
const mainPageFragment = createMainPage();
body.appendChild(mainPageFragment);

addingProTask();

const addProject = document.getElementById('add-projectBtn');
const projectAdd = document.getElementById('projectAdd');
const cancelBtn  = document.getElementById('cancelBtn');
const taskForm = document.getElementById('taskForm');
const addTask = document.getElementById('add-task');
const allTasks = document.getElementById('allTasks');
const today = document.getElementById('today');
const complete = document.getElementById('complete');
const title = document.getElementById('title');

addProject.addEventListener('click', showProjectInput);
cancelBtn.addEventListener('click', showProjectAdd);
addTask.addEventListener('click', showTaskForm);


function showProjectInput(){

        projectAdd.style.display = 'flex';
        addProject.style.display = 'none'; 
}

function showProjectAdd(){

    projectAdd.style.display = 'none';
    addProject.style.display = 'flex';
}


function showTaskForm(){
    taskForm.style.display = 'flex';
}


