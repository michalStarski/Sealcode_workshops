//---------------------------------TODOLIST SCRIPT FILE--------------------------------------


//-------------APP MECHANISM--------------

//VARIABLES
//-------------------------

//elements variables

var input = document.getElementById('addTask'); //input field
var btn = document.getElementById('btn'); //add button
var list = document.getElementById('list'); //task list
var hamburger = document.getElementById('hamburger'); //hamburger button
var delBtn = document.getElementsByClassName('deleteImg'); //delete button
var cBox = document.getElementsByClassName('done');


//numbers



//-------------------------

//TASKS ARRAY/PSEUDO-SERVER

var tasks = [];


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
    setTimeout(setANewDate,1000); //Refresh function, clock will change live

}

setANewDate();

//CREATING A TASK OBJECT

var task = function(value){
    this.status = 'onGoing'; //Object status
    this.value = value; //String
};


//ADDING A TASK FUNCTION

function addATask(){
    if(input.value !== '') {
        var t = new task(input.value); //If array isn't empty create a new task object
        tasks.push(t);
    }else{
        alert("You can't add an empty task!"); //Empty task prevention
    }
    // alert("You've added a task: " + input.value);
    display(tasks);
    deleteATask();
    completeATask();
    input.value= '';
    console.log(tasks);
}

//DISPLAY ON-GOING TASKS

function display(arr){
    if(Array.isArray(arr) && arr instanceof Array){
        list.innerHTML='';
        for(var i = 0; i<arr.length; i++){
                var e = document.createElement('li');
                var text = document.createTextNode(arr[i].value);
                var checkbox = document.createElement('input');
                var deleteBtn = document.createElement('button');
                var deleteImg = document.createElement('img');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('class', 'done');
                deleteBtn.setAttribute('class', 'delete');
                deleteBtn.appendChild(deleteImg);
                deleteImg.setAttribute('src', 'img/delete.png');
                deleteImg.setAttribute('class', 'deleteImg');
                e.appendChild(text);
                e.appendChild(checkbox);
                e.appendChild(deleteBtn);
                list.appendChild(e);
        }
    }
}

//DELETE A TASK

function deleteATask(){
    for(var x=0; x<delBtn.length; x++){
        var button = delBtn[x];
        button.addEventListener('click', function(){
            var pos = tasks.map(function (t) { return t.value }).indexOf(this.parentNode.parentNode.textContent); //array of updated positions
            tasks.splice(pos,1); //delete from an array
            this.parentNode.parentNode.remove(); //delete li element
            console.log(tasks); //debugger
        })
    }
}

//COMPLETE A TASK

var completed = [];

function completeATask(){
    for(var x=0; x<cBox.length; x++){
        var check = cBox[x];
        check.addEventListener('change', function(){
            if(this.checked){
                var pos = tasks.map(function (t) { return t.value }).indexOf(this.parentNode.parentNode.textContent);
                tasks[pos].status='completed';
                this.parentNode.parentNode.remove();
            }else{
                var pos = tasks.map(function (t) { return t.value }).indexOf(this.parentNode.parentNode.textContent);
                tasks[pos].status='onGoing';
                this.parentNode.parentNode.remove();
            }
            transfer(); //transfer files after changing status
        })
    }
}

//TRANSFER COMPLETE STATUS TASKS TO ANOTHER ARRAY

function transfer(){
    for(var i =0; i<tasks.length; i++){
        if(tasks[i].status==='completed'){ //check for status
            completed.push(tasks[i]); //add to completed array
            tasks.splice(i,1); //delete from previous array
            console.log(completed);
        }
    }
}


//TOGGLE MENU

function toggle(){ //toggles menu after clicking hamburger in mobile version of an app
    var menu = document.getElementsByClassName('menu')[0];
    menu.classList.toggle('toggleMenu');
}

btn.addEventListener('click', addATask);
hamburger.addEventListener('click', toggle);


//CLICKING BUTTONS ON MENU

//1) Completed tasks

