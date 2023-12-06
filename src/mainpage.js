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
    oneImg.src = '/dist/images/logo.png';

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
            { imageSrc: 'images/inbox.png', text: 'Inbox' },
            { imageSrc: 'images/today.png', text: 'Today' },
            { imageSrc: 'images/complete.png', text: 'Finished' }
        ];
    
        itemsData.forEach(function (itemData) {
            const navItem = document.createElement('div');
            navItem.classList.add('nav-items');
    
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

    const p = document.createElement('p');
    p.textContent = 'Test Projects';

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
    addTask.textContent = '+ add task';
    


    
    
    headerDetails.appendChild(oneImg);
    headerDetails.appendChild(twoP);
    header.appendChild(headerDetails);
    nav.appendChild(navDetails);
    navProjects.appendChild(navTitle)
    projects.appendChild(p);
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
    projectSection.appendChild(projectDetails);
    section1.appendChild(projectSection);
    main.appendChild(header);
    main.appendChild(section1);
    
    fragment.appendChild(main);
    return fragment;
}