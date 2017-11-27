var array = [];
var n = 5;

for(var i = 0; i<5; i++){
    array[i] = [];

    for(var j = 0; j<5; j++)
    {
        if(i<=j){
            array[i][j] = (i+1)*(j+1);
        }else{
            array[i][j] = 0;
        }

    }


}

console.log(array);
