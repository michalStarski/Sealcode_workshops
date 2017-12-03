var tab = [];
var i;

for(i = 0; i<=9; i++){
    tab[i] = [];
    for(j=0; j<=9; j++){
        tab[i][j] = (i+1)*(j+1);
    }
}

console.log(tab);
