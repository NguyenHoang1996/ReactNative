
L2ES6_Exe6 = () => {
    function sumAll(...num){
        var total = 0;
        for (var i = 0; i < num.length; i++) {
            total += num[i];         
        }
    }

    console.log(sumAll(1,2,3,4,5,6));
    console.log(sumAll(1,2,3,4,5,6));

    function power({base = 1, power = 2} = {}){
        return Math.pow(base, power);
    }
    console.log(power());
    console.log(power({}));
    console.log(power({base: 3, power: 10}));
};

export default L2ES6_Exe6;