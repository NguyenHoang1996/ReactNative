
L2ES6_HomeWork1 = () => {
    let arr = [12, 3, 4, 1, 2, 3];
    let sumArr = 0;
    function sumArray(array){
        for (var i = 0; i < array.length; i++) {
            sumArr += array[i];         
        }
        return sumArr;
    }

    console.log(sumArray(arr));
};

export default L2ES6_HomeWork1;