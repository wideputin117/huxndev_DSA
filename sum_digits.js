/**
 * Follow the below steps to solve the problem:

    Get the number
    Declare a variable to store the sum and set it to 0
    Repeat the next two steps till the number is not 0
    Get the rightmost digit of the number with help of the remainder ‘%’ operator by dividing it by 10 and adding it to the sum.
    Divide the number by 10 with help of ‘/’ operator to remove the rightmost digit.
    Print or return the sum

 */

     

    function sum(num){
        var val = 0;
        while(num != 0){
            val+= num % 10;
            num = parseInt(num/10);
        }
        return val;
    }
    var num = 123; // ans = 6

    console.log(sum(num));


    // using other method

    function sum2(num2){
        let val2 = 0;
        let str = num2.toString().split("");

        for(let i =0; i< str.length; i++){
            val2+= parseInt(str[i]);
        }
        console.log(val2);
    }
    sum2(234)