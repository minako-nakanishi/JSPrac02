const number = [4, 3, 12];

const numTest = number.some(function(x){
    console.log(x)
    if(x%2 === 0){
        return true;
    }else{
        return false;
    }
   
});
console.log(numTest); //1つでも条件に合う場合はtrue

const point = [100,200,301];
const pointFin = point.every(function(x){
    if(x%20===0){
        return true;
    }else{
        return false;
    }
});
console.log(pointFin); //1つでも条件が揃わないとfalse