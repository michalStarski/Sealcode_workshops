var newLi = document.createElement('li')
var newText = document.createTextNode('Punkt 5.')
var list = document.getElementsByTagName('ul')[0]

newLi.appendChild(newText)
list.appendChild(newLi)

newLi.setAttribute('id', 'li-5')