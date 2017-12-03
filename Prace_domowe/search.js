var array = [3,4,5,6,10,99,100,32];


var search = function(x, array){
    var i;
    for(i = 0;i<array.length; i++){
        if(array[i] === x) {
            var searched = [x, i];
            break; //Po pierwszym konczy
        }

    }
    if(searched !== undefined)
        return searched;
    else
        return "Doesnt Exist!";
};


console.log(search(3,array));
