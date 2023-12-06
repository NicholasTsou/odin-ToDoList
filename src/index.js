import { createMainPage } from "./mainpage";
import { addingProTask } from "./projectsTasks";

const body = document.body;
const mainPageFragment = createMainPage();
body.appendChild(mainPageFragment);

addingProTask();

const addProject = document.getElementById('add-projectBtn');
const projectAdd = document.getElementById('projectAdd');
const cancelBtn  = document.getElementById('cancelBtn');

addProject.addEventListener('click', showProjectInput);
cancelBtn.addEventListener('click', showProjectAdd);
function showProjectInput(){

        projectAdd.style.display = 'flex';
        addProject.style.display = 'none'; 
}

function showProjectAdd(){

    projectAdd.style.display = 'none';
    addProject.style.display = 'flex';
}
