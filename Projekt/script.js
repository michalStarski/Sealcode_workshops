//---------------------------------TO DO LIST SCRIPT FILE--------------------------------------


//-------------APP MECHANISM--------------

//VARIABLES
//-------------------------

//elements variables

var submit = document.getElementById('addTask'); //input field
var add = document.getElementById('btn'); //add button
var list = document.getElementById('list'); //task list
var hamburger = document.getElementById('hamburger'); //hamburger button

//menu buttons

var menuOnGoing = document.getElementById('menuBtn2');
var menuCredits = document.getElementById('menuBtn3');

//-------------------------

//TASKS ARRAY/PSEUDO-SERVER

var tasks = [];
var completed = [];

//SEALCODE API URL

var url='http://sealcode.org:8082/api/v1/resources/task';

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
    var hours = ('0' + d.getHours()).slice(-2); //whenever number has only 1 digit it displays 0 before
    var minutes = ('0' + d.getMinutes()).slice(-2); //slice takes only 2 lasts digits from string
    var seconds  = ('0' + d.getSeconds()).slice(-2);
    getDate.innerHTML= weekday + ', ' + day + ' ' + month + ' ' + year;
    time.innerHTML = hours + ':'+ minutes + ':' + seconds;
    setTimeout(setANewDate,1000); //Refresh function, clock will change live
}

//FUNCTIONS THAT STARTS AUTOMATICALLY AFTER PAGE LOADS
window.addEventListener('load',function () {
    setANewDate();
    getTasks();
    display();
});

//API, QWEST LIBRARY FUNCTIONS

//downolad tasks from server

function getTasks() {
    qwest.get(url, {}, {cache: true}).then(
        function(xhr, response) {
            response.forEach(function(element) {
                tasks.push(element);
                display();
            })});
}

//send tasks to the server

function addTaskServer(task) {
    qwest.post(url, {title: task.title, is_done: task.is_done}, {cache: true});
}

//status change

function checkboxClick(event) {
    tasks[this.id].body.is_done = this.checked;
    qwest.map('PATCH', url+'/'+tasks[this.id].id, tasks[this.id].body, {cache: true}).then(function(xhr, response) {
        display();
    });
}

//delete from server

function deleteTask() {
    qwest.delete(url+'/'+tasks[this.id].id, null, {cache: true}).then(function(xhr, response) {
        location.reload();
    });
}

//delete locally
function delLocal(){
    console.log(this.par);
}

//DECLARING A TASK OBJECT

function task(title, status){
    this.title = title;
    this.is_done = status;
}


//DISPLAY TASKS FROM AN ARRAY

function display(){
    if(tasks.length == 0){
        list.innerHTML='';
        var err = document.createElement('li');
        var errMsg = document.createTextNode('No tasks for today!');
        err.appendChild(errMsg);
        list.appendChild(err);
    }else{
    list.innerHTML='';
    for(var i=0; i<tasks.length; i++) {
        var li = document.createElement('li')
        var e = document.createElement('p');
        var text = document.createTextNode(tasks[i].body.title);
        var input = document.createElement('input');
        var btn = document.createElement('button');
        var delImg = document.createElement('img');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('class', 'done');
        input.setAttribute('id', i);
        btn.setAttribute('class', 'delete');
        btn.setAttribute('id', i);
        btn.appendChild(delImg);
        delImg.setAttribute('src', 'img/delete.png');
        delImg.setAttribute('class', 'deleteImg');

        li.appendChild(e);
        li.appendChild(input);
        li.appendChild(btn);
        btn.appendChild(delImg);
        e.appendChild(text);
        list.appendChild(li);

        input.addEventListener('change', checkboxClick);
        btn.addEventListener('click', deleteTask);
    }

    }
}

//ADDING A TASK

function enterATask(){
    var v = submit.value.replace(/\s+/g, " ").trim();
    if(v) {
        var t = new task(v, false);
        addTaskServer(t);
        getTasks();
        location.reload(); //refresh site
    }else
        alert("You can't add an empty message"); //error msg
}

//Enter submit

document.addEventListener('keydown', function(){
    var keyName = event.key;
    if(keyName === 'Enter'){
        enterATask();
    }
})

//Mouse click submit

add.addEventListener('click', enterATask);

//MENU FUNCTIONS

function toggle(){ //toggles menu after clicking hamburger in mobile version of an app
    var menu = document.getElementsByClassName('menu')[0];
    menu.classList.toggle('toggleMenu');
}

hamburger.addEventListener('click', toggle);

//1) On-Going tasks

menuOnGoing.addEventListener('click', function () {
    console.log('onGoing!'); //debugger
    display(tasks); //return to display function
});


//2) Credits

menuCredits.addEventListener('click', function () {
    console.log('Credits!'); //debugger
    list.innerHTML =''; //preparing app space for credits
    var credits = document.createElement('li');
    credits.innerHTML = 'Aplikację wykonał Michał Starski <br> w ramach warsztatów SealHub';
    list.appendChild(credits);
});