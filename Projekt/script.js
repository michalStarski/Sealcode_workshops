//---------------------------------TO DO LIST SCRIPT FILE--------------------------------------

//Commented line of codes are for second version of app where completed tasks
//goes to another array

//-------------APP MECHANISM--------------

//VARIABLES
//-------------------------

//elements variables

var input = document.getElementById('addTask'); //input field
var btn = document.getElementById('btn'); //add button
var list = document.getElementById('list'); //task list
var hamburger = document.getElementById('hamburger'); //hamburger button
var delBtn = document.getElementsByClassName('deleteImg'); //delete button
var cBox = document.getElementsByClassName('done'); //checkbox

//menu buttons

var menuCompleted = document.getElementById('menuBtn1');
var menuOnGoing = document.getElementById('menuBtn2');
var menuCredits = document.getElementById('menuBtn3');

//-------------------------

//TASKS ARRAY/PSEUDO-SERVER

var tasks = [];
var completed = [];


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
    alert("You've added a task: " + input.value);
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
    for(var k=0; k<delBtn.length; k++){
        var button = delBtn[k];
        button.addEventListener('click', function(){
            var pos = tasks.map(function (t) { return t.value }).indexOf(this.parentNode.parentNode.textContent); //array of updated positions
            tasks.splice(pos,1); //delete from an array
            this.parentNode.parentNode.remove(); //delete li element
            console.log(tasks); //debugger
            ifEmpty(tasks);
        })
    }
}

//COMPLETE A TASK


function completeATask(){
    for(var x=0; x<cBox.length; x++){
        var check = cBox[x];
        check.addEventListener('change', function(){
            if(this.checked){
                var pos = tasks.map(function (t) { return t.value }).indexOf(this.parentNode.textContent);
                if(tasks[pos].status === 'onGoing'){
                    tasks[pos].status = 'completed'; //change status for transfer
                    // this.parentNode.remove(); //remove from onGoing list
                }
            }
            // transfer(); //transfer files after changing status
            ifEmpty(tasks);
        })
    }
}

//TRANSFER COMPLETE STATUS TASKS TO ANOTHER ARRAY
//
// function transfer(){
//     for(var j =0; j<tasks.length; j++){
//         if(tasks[j].status==='completed'){ //check for status
//             completed.push(tasks[j]); //add to completed array
//             tasks.splice(j,1); //delete from previous array
//             console.log(completed);
//         }
//     }
// }


//CHECKING IF AN ARRAY IS EMPTY

function ifEmpty(arr){
    console.log('ifEmpty!');
    if(arr.length===0){
        list.innerHTML='';
        var e = document.createElement('li');
        e.innerHTML='No tasks for today!';
        e.setAttribute('class', 'empty');
        e.setAttribute('id', 'emptyMsg');
        list.appendChild(e);
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

// menuCompleted.addEventListener('click',function () {
//    console.log('completed!'); //debugger
//    list.innerHTML=''; //preparing app space for new list
//     //displaying new list
//    for(var i=0; i<completed.length; i++) {
//        var el = document.createElement('li');
//        var textNode = document.createTextNode(completed[i].value);
//        el.appendChild(textNode);
//        list.appendChild(el);
//    }
//     ifEmpty(completed);
// });

//2) On-Going tasks

menuOnGoing.addEventListener('click', function () {
   console.log('onGoing!'); //debugger
    display(tasks); //return to display function
    ifEmpty(tasks);
});


//3) Credits

menuCredits.addEventListener('click', function () {
   console.log('Credits!'); //debugger
   list.innerHTML =''; //preparing app space for credits
   var credits = document.createElement('li');
   credits.innerHTML = 'Aplikację wykonał Michał Starski <br> w ramach warsztatów SealHub';
   list.appendChild(credits);

});
