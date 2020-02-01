const studentArray = [];

const clearDom = (divId) => {
    const element = document.getElementById(divId);
    element.parentNode.removeChild(element);
};

const newStudent = () => {
    let student = new Object();
    student.name = document.getElementById('inputName').value;
    student.id = Math.ceil(Math.random() * 124568)
    houseGenerator(student);
    studentArray.push(student);
};

const houseGenerator = (obj) => {
    switch (Math.ceil(Math.random() * 4)) {
        case 1:
            obj.house = "Gryffindor"
            break;
        case 2:
            obj.house = "Slytherin"
            break;
        case 3:
            obj.house = "Hufflepuff (lol)"
            break;
        case 4:
            obj.house = "Ravenclaw"
    }
}

const buildForm = () => {
    let domString = '';
    domString +=    `<form>`
    domString +=        `<div class="form-group d-flex flex-column text-center">`
    domString +=        `<label for="Name">Student's Name</label>`                   
    domString +=    `<input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Enter Name">`
    domString +=        `</div>`
    domString +=     `<button type="submit" id="btn-sort" class="btn btn-success w-100">Sort!</button>`
    domString +=     `</form>`

    printToDom('input-form', domString);
}
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildStudentCards = () => {
    let domString = ''; 
    studentArray.forEach((student) => {
        domString += `<div class="card col-md-6 col-lg-4">`
        domString += `<div class="card-body d-flex flex-column">`
        domString +=   `<h5 class="card-title text-center">${student.name}</h5>`
        domString +=   `<p class="card-text text-center">${student.house}</p>`
        domString +=   `<a href="#" id="${student.id}" class="btn btn-danger expell">Expell</a>`
        domString += `</div>`
        domString += `</div>`
    });
    printToDom('student-cards', domString);
    expellButtonLoop();
};

const expellButtonLoop = () => {
    const expelledStudentButtons = document.getElementsByClassName('expell');
    for (let i = 0; i < expelledStudentButtons.length; i++) {
        expelledStudentButtons[i].addEventListener('click', expellStudentHTML);
        expelledStudentButtons[i].addEventListener('click', expellStudentArray);
    }
};

const expellStudentHTML = (e) => {
    const buttonId = e.target.offsetParent;
    buttonId.remove();
};

const expellStudentArray = () => {
    studentArray.length -= 1;
};

const events = () => {
    document.getElementById('btn-main').addEventListener('click', () => {
        clearDom('jumbotron');
        buildForm();
    });
    
    document.addEventListener('click', (e) => {
        if (e.target.id === 'btn-sort') {
            newStudent();
            buildStudentCards();
        }
    });
}

const init = () => {
    events();
};

init();