var h1 = document.getElementsByClassName('example')[0];
var id = 'identyfikator';

function reverse(){
  var arr = id.split('');
  var splitArr = arr.reverse();
  var result = splitArr.join("");
  return result;
}

var reversed = reverse();

h1.removeAttribute('class');
h1.setAttribute('id',reversed);


var wrapper = document.getElementsByClassName('wrapper')[0];
var e = document.createElement('a');
var textNode = document.createTextNode('link');
e.setAttribute('href', 'https://sealcode.org');
e.setAttribute('target','blank');
e.setAttribute('class','new-class');
e.appendChild(textNode);
wrapper.appendChild(e);

function replace(){
  var list = document.getElementsByTagName('ul')[0];
  list.innerHTML='';
  for(var i=1; i<=30; i++){
    var newE = document.createElement('li');
    var newTextNode = document.createTextNode('Nowa treść '+i);
    newE.appendChild(newTextNode);
    newE.setAttribute('id', 'new'+i);
    list.appendChild(newE);
  }
}

replace();

document.getElementsByTagName('p')[0].innerHTML='Zmieniona treśc akapitu';
