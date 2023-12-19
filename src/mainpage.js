export function createMainPage(){

    const fragment = document.createDocumentFragment();

    const main = document.createElement('div');
    main.classList.add('main');

    const header = document.createElement('header');
    header.setAttribute('id','header');

    const headerDetails = document.createElement('div');
    headerDetails.classList.add('header-details');

    const oneImg = document.createElement('img');
    oneImg.classList.add('one');
    oneImg.src = 'images/logo.png';

    const twoP = document.createElement('p');
    twoP.classList.add('two');

    const contentArray = [
        { text: "Odin", class: "orange" },
        { text: "Project ", class: "green" },
        { text: "To ", class: "orange" },
        { text: "Do ", class: "green" },
        { text: ": ", class: "orange" },
        { text: "List", class: "green" }
    ];

    contentArray.forEach(function(item) {
        const span = document.createElement("span");
        span.textContent = item.text;
        span.classList.add(item.class);
        twoP.appendChild(span);
    });

    const section1 = document.createElement('section');
    section1.setAttribute('id', 'section1');

    const nav = document.createElement('div');
    nav.classList.add('nav');

    
    const navDetails = document.createElement('div');
    navDetails.classList.add('nav-details');
    
        const itemsData = [
            { imageSrc: 'images/inbox.png', text: 'All Tasks', id: 'allTasks' },
            { imageSrc: 'images/today.png', text: 'Today', id: 'today'},
            { imageSrc: 'images/complete.png', text: 'Finished', id: 'complete' }
        ];
    
        itemsData.forEach(function (itemData) {
            const navItem = document.createElement('div');
            navItem.classList.add('nav-items');
            navItem.id = itemData.id;
    
            const img = document.createElement('img');
            img.classList.add('nav-images');
            img.src = itemData.imageSrc;
    
            const p = document.createElement('p');
            p.textContent = itemData.text;
    
            navItem.appendChild(img);
            navItem.appendChild(p);
    
            navDetails.appendChild(navItem);
        });
    
    const navProjects = document.createElement('div');
    navProjects.classList.add('nav-projects');

    const navTitle = document.createElement('p');
    navTitle.classList.add('nav-title');
    navTitle.textContent = 'Projects';

    const projects = document.createElement('div');
    projects.classList.add('projects');
    projects.setAttribute('id', 'projects');

    // const p = document.createElement('p');
    // p.textContent = 'Test Projects';

    const addProject = document.createElement('button');
    addProject.classList.add('add-projectBtn');
    addProject.setAttribute('id','add-projectBtn');
    addProject.textContent = '+ add project';

    const projectAdd = document.createElement('div');
    projectAdd.classList.add('projectAdd');
    projectAdd.setAttribute('id','projectAdd');

    const projectInput = document.createElement('input');
    projectInput.classList.add('project-input');
    projectInput.setAttribute('id', 'project-input');

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    addBtn.setAttribute('id', 'addBtn');
    addBtn.textContent = 'Add';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.setAttribute('id','cancelBtn');
    cancelBtn.textContent = 'Cancel';

    const projectSection = document.createElement('div');
    projectSection.classList.add('project-section');

    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');

    const title = document.createElement('p');
    title.classList.add('title');
    title.setAttribute('id', 'title');
    title.textContent = 'Add Task';

    const addTask = document.createElement('button');
    addTask.classList.add('add-task');
    addTask.setAttribute('id', 'add-task');
    addTask.textContent = '+ add task';

    const form = document.createElement('form');
    form.classList.add('taskForm');
    form.setAttribute('id', 'taskForm');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');

    const taskTitle = document.createElement('label');
    taskTitle.classList.add('taskTitle');
    taskTitle.textContent = 'Task Title';

    const taskInput = document.createElement('input');
    taskInput.setAttribute('id', 'taskTitle');
    taskInput.classList.add('taskInput');

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskInput);
    form.appendChild(taskDiv);
    
    const taskDiv2 = document.createElement('div');
    taskDiv2.classList.add('taskDiv');

    const taskTitle2 = document.createElement('label');
    taskTitle2.classList.add('taskTitle');
    taskTitle2.textContent = 'Task Date';

    const taskInput2 = document.createElement('input');
    taskInput2.classList.add('taskDate');
    taskInput2.setAttribute('id', 'taskDate');
    taskInput2.type = 'date';
    
    taskDiv2.appendChild(taskTitle2);
    taskDiv2.appendChild(taskInput2);
    form.appendChild(taskDiv2);

    const taskDiv3 = document.createElement('div');
    taskDiv3.classList.add('taskDiv');

    const taskTitle3 = document.createElement('label');
    taskTitle3.classList.add('taskTitle');
    taskTitle3.textContent = 'Task Importance';

    const taskButton = document.createElement('button');
    taskButton.classList.add('important');
    taskButton.setAttribute('id', 'important');
    taskButton.type = 'button';
    taskButton.textContent = 'Important';

    taskDiv3.appendChild(taskTitle3);
    taskDiv3.appendChild(taskButton);
    form.appendChild(taskDiv3);

    const taskDiv4 = document.createElement('div');
    taskDiv4.classList.add('taskDiv');

    const taskDiv5 = document.createElement('div');
    taskDiv5.classList.add('taskDiv');

    const taskTitle5 = document.createElement('label');
    taskTitle5.classList.add('taskTitle');
    taskTitle5.textContent = 'Task Add';

    const taskButton2 = document.createElement('button');
    taskButton2.classList.add('subBtn');
    taskButton2.textContent = 'Add';
    taskButton2.setAttribute('id', 'subBtn');
    taskButton2.type = 'submit';

    const tasksContainer = document.createElement('div');
    tasksContainer.setAttribute('id', 'tasksContainer');
    tasksContainer.classList.add('tasksContainer');

    
    taskDiv5.appendChild(taskTitle5);
    taskDiv5.appendChild(taskButton2);
    form.appendChild(taskDiv5);
    
    
    headerDetails.appendChild(oneImg);
    headerDetails.appendChild(twoP);
    header.appendChild(headerDetails);
    nav.appendChild(navDetails);
    navProjects.appendChild(navTitle)
    // projects.appendChild(p);
    navProjects.appendChild(projects);
    navProjects.appendChild(addProject);
    buttons.appendChild(addBtn);
    buttons.appendChild(cancelBtn);
    projectAdd.appendChild(projectInput);
    projectAdd.appendChild(buttons);
    navProjects.appendChild(projectAdd);
    nav.appendChild(navProjects);
    section1.appendChild(nav);
    projectDetails.appendChild(title);
    projectDetails.appendChild(addTask);
    projectDetails.appendChild(form);
    projectDetails.appendChild(tasksContainer);
    projectSection.appendChild(projectDetails);
    section1.appendChild(projectSection);
    main.appendChild(header);
    main.appendChild(section1);
    
    fragment.appendChild(main);
    return fragment;
}