 // removing negative values from positive using Math.sign


 function negativeNumber(arr){

    let negative = [];

    for(let num of arr){
        if(Math.sign(num)!== 1 || Math.sign(num) !== 0){
            negative.push(num);
        }
    }
    return negative;
 }

 console.log(negativeNumber([1,0,-1,3,1,-5,3,1]));
