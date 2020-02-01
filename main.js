const studentArray = [];

const events = () => {
    document.getElementById('btn-main').addEventListener('click', () => {
        clearDom('jumbotron');
    });
    document.getElementById('btn-sort').addEventListener('click', newStudent);
    document.getElementById('btn-sort').addEventListener('click', buildStudentCards);
};

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
    console.log(studentArray);
};

const houseGenerator = (obj) => {
    switch (Math.ceil(Math.random() * 4)) {
        case 1:
            obj.house = "Hogwarts"
            break;
        case 2:
            obj.house = "Slytherin"
            break;
        case 3:
            obj.house = "Hufflepuff"
            break;
        case 4:
            obj.house = "Ravenclaw"
    }
}

const buildStudentCards = () => {
    let domString = ''; 
    studentArray.forEach((student) => {
        domString += `<div class="card d-flex flex-column justify-content-center" style="width: 30%;">`
        domString += `<div class="card-body">`
        domString +=   `<h5 class="card-title">${student.name}</h5>`
        domString +=   `<p class="card-text">${student.house}</p>`
        domString +=   `<a href="#" id="${student.id}" class="btn btn-danger expell">Expell</a>`
        domString += `</div>`
        domString += `</div>`
    });
    printToDom('student-cards', domString);
    expellButtonLoop();
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const expellButtonLoop = () => {
    const expelledStudentButtons = document.getElementsByClassName('expell');
    for (let i = 0; i < expelledStudentButtons.length; i++) {
        expelledStudentButtons[i].addEventListener('click', expellStudent);
    }
}

const expellStudent = (e) => {
    const buttonId = e.target.offsetParent;
    buttonId.remove();
}

events();

console.log(studentArray)