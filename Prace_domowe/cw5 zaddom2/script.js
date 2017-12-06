var d = new Date;
var month = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
var day = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
var sentence = 'Podstawą szczęścia jest wolność, a podstawą wolności odwaga';
var reversed = sentence.split(',')[1].split('').reverse().join('');
var delta = function(a,b,c){
    return Math.pow(b,2)-4*(a*c);
}

var fn = function(x){
    return Math.sqrt(Math.abs(Math.sin(Math.log2(Math.pow(2,x)))) + Math.max(0,x) + Math.abs(Math.pow(-1*Math.E,2*x)+ Math.min(-1,x)));
}

//First paragraph

document.getElementById('heading').innerHTML = 'Michał Starski';
document.getElementById('paragraph-one').innerHTML = 'Data, która pojawi się przy otwarciu tej strony to: ' + 
day[d.getDay()] + ' ' + d.getMonth() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear() + ' r. ' + '<br>' +
'Godzina w momencie otwarcia strony : ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getMilliseconds() + '.';


//Second paragraph 

document.getElementById('paragraph-two').innerHTML = 'Operuję na zdaniu: "Podstawą szczęścia jest wolność, a podstawą wolności odwaga."' + '<br>' +
'Trzynastym znakiem w tym zdaniu jest: ' + sentence.charAt(12) + '<br>' +
'Znaki pomiędzy 7. a 12. pozycją to: ' + sentence.substring(7,12) + '<br>' +
'Pierwszy raz znak "ą" pojawia się na miejscu: ' + sentence.indexOf('ą') + '<br>' +
'Ten ciąg ma' + ' ' + sentence.length + ' ' + 'znaków.' + '<br>' +
'Po zamianie "podstawą" na "fundamentem" mamy: ' + ' ' + sentence.replace('podstawą', 'fundamentem') + '. ' + '<br>' +
'Część zdania przed przecinkiem to: ' + sentence.split(',')[0] + '<br>' +
'Druga część zdania po odwróceniu to: ' + reversed;


//Third paragraph 

document.getElementById('paragraph-three').innerHTML = 'Korzystam z dodatkowych wiadomości o obiekcie Math ze strony: http://kursjs.pl/kurs/math.php' + '<br>' +
'Zadanie 1. Mam funkcję kwadratową: ' + '<br>' +
'f(x) = x^2 + 5x + 6' + '<br>' + '<br>' +
'Wyróznik tego trójmianu to: ' + delta(1,5,6) + '<br>' +
'Pierwiastek kwadratowy tego wyrónika to: ' + Math.sqrt(delta(1,5,6),2) + '<br>' +
'Miejscami zerowymi tej funkcji są: ' + (-1*5-delta(1,5,6))/2*1 + ' ' + 'i' + ' ' + (-1*5+delta(1,5,6))/2*1


// Fourth paragraph 

document.getElementById('paragraph-four').innerHTML = 
'Kontynuuję pracę z obiektem Math i używam obiektu Number:' + '<br>' + '<br>' +
'Zadanie 2. Obliczam wartość funkcji: ' + '<br>' +
'f(x) = sqrt(|sin(ln(2^(x))) + max(0, x) + |-e^(2x) + min(-1, x)||)' + '<br>' + 
'dla x = pi/6.' + '<br>' + '<br>' +
'Mój wynik to: ' + fn(6) + '<br>' + 
'Wynik w notacji wykładniczej to: ' + fn(6).toExponential() + '<br>' +
'Po zaokrągleniu w górę mam: ' + Math.ceil(fn(6)) + '. ';

