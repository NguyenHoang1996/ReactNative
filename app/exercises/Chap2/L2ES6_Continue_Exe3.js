
L2ES6_Exe3 = () => {     
    let arrayHandled = [];   
    function addNumberToArray(array, number){
        arrayHandled = array.map(function(x){
            return x + number;
        });
        return arrayHandled;
    }        
    console.log(addNumberToArray([1,2,3], 5));
    console.log(addNumberToArray([1,2,3], 1));        
};
export default L2ES6_Exe3;
        