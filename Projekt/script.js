//---------------------------------TODOLIST SCRIPT FILE--------------------------------------

//VARIABLES
//-------------------------

//elements variables
var input = document.getElementById('btn');

//numbers
var count = 0; // checking if a function has been called at least once
var x = 0; //array position
var tPos = 0; // task position


//-------------------------

//TASKS ARRAY/PSEUDO-SERVER

var tasks = new Array();


//TIME AND DATE SECTION

function setANewDate() {
    var d = new Date;
    var months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień',
        'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    var days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    var getDate = document.getElementById('setDate');
    var weekday = days[d.getDay()];
    var day = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    var time = document.getElementById('time');
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds  = d.getSeconds();
    getDate.innerHTML= weekday + ', ' + day + ' ' + month + ' ' + year;
    if(minutes<10) {
        time.innerHTML = hours + ':' + '0' + minutes + ':' + seconds;
    }
    else {
        time.innerHTML = hours + ':' + minutes + ':' + seconds;
    }
    setTimeout(setANewDate,1000); //Refresh a function, clock will change live

}

setANewDate();

//CREATING A TASK OBJECT

var task = function(value, position){
    this.status = 'onGoing'; //Object status
    this.value = value; //String
    this.position = position;
}



//DISPLAY ELEMENT

function display(){
    var position = document.getElementById('list');
    if(Array.isArray(tasks) && tasks instanceof Array && tasks.length > 0) {
        if (count === 0) {
            position.innerHTML = ''; //Erasing an empty message
        }
        //CREATING A LIST ELEMENT
        if(tasks.length>1)
            position.innerHTML='';
        for(x=0; x<tasks.length; x++){
            var text = document.createTextNode(x + 1 + '. ' + tasks[x].value + '   ');
            var newElement = document.createElement('p');
            newElement.appendChild(text);
            position.appendChild(newElement);
            newElement.setAttribute('id', 'paragraph' + x);
            var newCheckbox = document.createElement('input');
            newCheckbox.setAttribute('type', 'checkbox');
            newCheckbox.setAttribute('class', 'done');
            newElement.appendChild(newCheckbox);
            var newDelete = document.createElement('button');
            newElement.appendChild(newDelete);
            newDelete.setAttribute('class', 'delete');
            var deleteImg = document.createElement('img');
            deleteImg.setAttribute('src', 'img/delete.png');
            deleteImg.setAttribute('class', 'deleteImg');
            deleteImg.setAttribute('id', 'dbtn' + x);
            deleteImg.setAttribute('value', 'eventNo');
            newDelete.appendChild(deleteImg);
            count++;
        }
    }
}


function displayCompleted(){

}



//ADDING A TASK

function addATask(){
    setANewDate();
    if(document.getElementById('addTask').value===''){  //Checking for empty string
        alert('Nie możesz dodać pustego zadania!');
    }else{
        //Actual function
        var t = new task((document.getElementById('addTask').value.replace(/\s+/g,' ').trim()), tPos); //Loading an input and removing useless whitespaces
        tasks.push(t); //Add object to an array
        document.getElementById('addTask').value=''; //Resetting the value of an input
        tPos++; // increase index
    }
    display();
    for(var index=0; index<tasks.length; index++){
        removeATask(document.getElementById('dbtn' + index), index); //adding a listener to every element
    }
    for(var checkboxes=0; checkboxes<tasks.length; checkboxes++){
        completeATask(checkboxes); //adding a listener to every element
    }
}

//REMOVE FUNCTION

function removeATask(btn, i){
    if(btn.value!=='eventYes') { //preventing from changing position value
        btn.addEventListener('click', function () {
            btn.parentNode.parentNode.innerHTML = '';
            var index = tasks.map(function (t) {
                return t.position;
            }).indexOf(i); // Return array of positions
            tasks.splice(index, 1);
            alert("You've successfully deleted a task!");
        });
        btn.value = 'eventYes';
    }
}


//COMPLETE A TASK FUNCTION

var cTasks = new Array(); //Array of completed tasks;

function completeATask(i){
    var checkbox = document.querySelectorAll('.done');
        checkbox[i].addEventListener('change', function(){
            var index = tasks.map(function (t) {
                return t.position;
            }).indexOf(i); // Return array of positions
            if(this.checked){
                tasks[index].status='completed';
                alert("You've Completed a Task!");
                checkbox[i].parentNode.innerHTML='';
            }
        })
}


function ifCompleted(){
    for(var i = 0; i<tasks.length; i++){
        if(tasks[i].status==='completed'){
            cTasks.push(tasks[i]); //Push completed task to a new array
            tasks.splice(i,1); //Remove it from old one
        }
    }
}


//EVENT HANDLERS

input.addEventListener('click', addATask);

