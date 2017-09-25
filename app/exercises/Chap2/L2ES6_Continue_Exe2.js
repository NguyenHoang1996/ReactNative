
L2ES6_Exe2 = () => {        
    function addNumberToArray(array, number){
        for (var index = 0; index < array.length; index++) {
             array[index] += number;
        }
        return array;
    }        
    console.log(addNumberToArray([1,2,3], 5));
    console.log(addNumberToArray([1,2,3], 1));        
};
export default L2ES6_Exe2;
    