    var zadanieJeden = new zadania(10,8, 'matematyka');

    var spanOne = document.getElementById('span-one');
    var ilosc = zadanieJeden.nazwaPrzedmiotu;

    spanOne.innerHTML = ilosc;

    document.getElementById('span-two').innerHTML = zadanieJeden.ileZostalo();

    var sentence = ' Home sweet home ';

    document.getElementById('paragraph-one').innerHTML =
        'Nasz ciąg ma długość:' + sentence.length + '<br>' +
        'Jeśli zmienimy wszystkie znaki na wielkie ciąg będzie wyglądać tak:' +
         sentence.toUpperCase() + '<br>' +
        'Na 10. pozycji znajduje się znak:' + sentence.charAt(10) + '<br>' +
        'Ciąg \'ee\' znajduje się na miejscu:' + sentence.indexOf('ee') + '<br>' +
        'Ostatni indeks znaku \'e\' to:' + sentence.lastIndexOf('e') + '<br>' +
        'Znaki od 8 do 14 to:' + sentence.substring(8,14) + '<br>' +
        'Po usunięciu niepotrzebnych spacji nasz ciąg wygląda tak:' + sentence.trim() + '<br>' +
        'Po zmianie \'me\' na \'w\' nasz ciąg wygląda tak:' + sentence.replace('me', 'w') + '<br>;'

    var randomNumber = Math.floor(Math.random()*10+1);
    document.getElementById('paragraph-two').innerHTML = randomNumber;

    var daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
    var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

    var d = new Date();

    var day = daysOfWeek[d.getDay()];
    var month = months[11];
    var dateOfBirth = new Date(1999, 23, 1, 13, 37, 000); // ustawiamy datę z przeszłości w formacie: YYYY, MM, DD, HH, MM, SS
    var difference = d.getDate() - dateOfBirth.getDate(); // wynik jest w milisekundach
    var age = Math.floor(difference / 31556900000); // dzielone całkowicie przez liczbę milisekund w roku (przy założeniu, że to nie jest rok przestępny)
    var date = d.toDateString();

    var el = document.getElementById('paragraph-three');
    el.innerHTML = 'Dzisiaj jest: ' + day + '.' + '<br />' + 'Aktualny miesiąc: ' + month + '.' + '<br />' + 'Mój wiek w latach to: ' + age + '.' + '<br />' + 'Data wyświetlona w momencie wywołania metody: ' + date + '.';

