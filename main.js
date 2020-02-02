const studentArray = [];

const clearDom = (divId) => {
    const element = document.getElementById(divId);
    element.parentNode.removeChild(element);
};

const newStudent = () => {
    let student = new Object(); // When the objects are stored in the array, their names are just index numbers. Maybe a way to change that?
    student.name = document.getElementById('inputName').value;
    student.id = Math.ceil(Math.random() * 124568)
    houseGenerator(student);
    if(student.name !== '') {   // forces a name selection
        studentArray.push(student);
    } else {
        window.alert("You have to pick a name!")
    };
};

const houseGenerator = (studentObject) => {
    switch (Math.ceil(Math.random() * 4)) {
        case 1:
            studentObject.house = "Gryffindor"
            break;
        case 2:
            studentObject.house = "Slytherin"
            break;
        case 3:
            studentObject.house = "Hufflepuff"
            break;
        case 4:
            studentObject.house = "Ravenclaw"
    };
};

const buildForm = () => {
    let domString = '';
    domString += `<form>`
    domString +=     `<div class="form-group d-flex flex-column text-center">`
    domString +=         `<h5><label for="Name">Student's Name</label></h5>`                   
    domString +=         `<input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Enter Name">`
    domString +=     `</div>`
    domString +=    `<button type="submit" id="btn-sort" class="btn btn-success w-100">Sort!</button>`
    domString += `</form>`

    printToDom('input-form', domString);
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildStudentCards = () => {
    let domString = ''; 
    studentArray.forEach((student) => {
        domString += `<div class="card col-md-6 col-lg-4">`
        domString +=    `<div class="card-body d-flex flex-column">`
        domString +=        `<h5 class="card-title text-center">${student.name}</h5>`
        domString +=        `<p class="card-text text-center">${student.house}</p>`
        domString +=        `<a href="#" id="${student.id}" class="btn ${student.house} expel">Expel</a>`
        domString +=    `</div>`
        domString += `</div>`
    });
    printToDom('student-cards', domString);
    expelButtonLoop();
};

const expelButtonLoop = () => {
    const expelledStudentButtons = document.getElementsByClassName('expel'); // Creates HTMLCollection object (~array-ish) which is a collection of all elements with an expel class
    for (let i = 0; i < expelledStudentButtons.length; i++) {                // Apparently you can iterate across an HTMLCollection object. Neat-o!
        expelledStudentButtons[i].addEventListener('click', expelStudentHTML);
        expelledStudentButtons[i].addEventListener('click', expelStudentArray);
    };
};

const expelStudentHTML = (e) => {
    const buttonId = e.target.offsetParent;    // For some reason this is how you target the immediate parent of the id lol shout-out to dev tools
    buttonId.remove();
};

const expelStudentArray = () => {
    studentArray.length -= 1;                 // Right now this only removes the last item of the array, try to make it expell the student 
};

const events = () => {
    document.getElementById('btn-main').addEventListener('click', () => {   // Remove the jumbotron and build the form at the click of a button.
        clearDom('jumbotron');
        buildForm();
    });
    
    document.addEventListener('click', (e) => {    // Calls the desired functions ONLY when the specific button is pressed (without if-else, the script loads the function prior to building the necessary button, causing the site to poop its pants)
        if (e.target.id === 'btn-sort') {
            newStudent();
            buildStudentCards();
            buildForm();                           // Calling this guy again resets the form!
        };
    });
};

const init = () => {
    events();
};

init();