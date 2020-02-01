const studentArray = [];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const events = () => {
    
    // document.getElementById('btn-main').addEventListener('click', clearDom('jumbotron'));
    document.getElementById('btn-sort').addEventListener('click', newStudent);
    document.getElementById('btn-sort').addEventListener('click', buildStudentCards);
};

const clearDom = (divId) => {
    let element = document.getElementById(divId);
    element.parentNode.removeChild(element);
};

const expellStudent = (e) => {
    buttonId = e.target.id;
    clearDom(buttonId);
}
//const showForm = () => {
//    clearDom('jumbotron');
//    let domString = '';
//     <form>`
//        <div class="d-flex flex-column justify-content-center w-50 p2 around form-group">`
//            <label for="Name">Student's Name</label>`
//            <input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Enter Name">`
//        </div>`
//            <button type="submit" id="btn-sort" class="btn btn-success">Sort!</button>`
//     </form>`
//    printToDom('input-form', domString);
//};

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

const newStudent = () => {
    let student = new Object();
    student.name = document.getElementById('inputName').value;
    student.id = Math.ceil(Math.random() * 124568)
    houseGenerator(student);
    studentArray.push(student);
    console.log(studentArray);
};


const buildStudentCards = () => {
    let domString = ''; 
    studentArray.forEach((student) => {
        domString += `<div class="card" style="width: 18rem;">`
        domString += `<div class="card-body">`
        domString +=   `<h5 class="card-title">${student.name}</h5>`
        domString +=   `<p class="card-text">${student.house}</p>`
        domString +=   `<a href="#" id=${student.id} class="btn btn-primary expell">Expell</a>`
        domString += `</div>`
        domString += `</div>`
    });
    printToDom('student-cards', domString);
};


events();
console.log(studentArray)