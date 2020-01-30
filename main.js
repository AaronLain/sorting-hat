const studentArray = [];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const events = () => {
    document.getElementById('btn-main').addEventListener('click', showForm);
    document.getElementById('btn-sort').addEventListener('click', newStudent);
};

const clearDom = (divId) => {
    let element = document.getElementById(divId);
    element.parentNode.removeChild(element);
};


const showForm = () => {
    clearDom('jumbotron');
    let domString = '';
    domString += `<form>`
    domString +=    `<div class="d-flex flex-column justify-content-center w-50 p2 around form-group">`
    domString +=        `<label for="Name">Student's Name</label>`
    domString +=        `<input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Enter Name">`
    domString +=    `</div>`
    domString +=        `<button type="submit" id="btn-sort" class="btn btn-success">Sort!</button>`
    domString += `</form>`
    printToDom('input-form', domString);
};

const newStudent = () => {
    let student = document.getElementById('input').alue;
    studentArray.push(student);
    console.log(student);
    console.log(studentArray);
};


const buildStudentCards = () => {
    let domString = '';
    studentArray.forEach((student) => {
        domString += `<div class="student">`;
        domString +=   `<header class="cardhead"><h2>${student.name}</h2></header>`;
        domString +=   `<p>${student.house}</p>`
        domString += '</div>';
    })
    printToDom('student-cards', domString);
};

events();
console.log(studentArray)