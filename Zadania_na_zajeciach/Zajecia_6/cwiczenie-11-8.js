for(var i = 1; i<=5; i++){
    var list = document.getElementById('li-'+i).parentNode
    list.removeChild(document.getElementById('li-'+i))
}


var ul = document.querySelector('ul')
ul.parentNode.removeChild('ul')
