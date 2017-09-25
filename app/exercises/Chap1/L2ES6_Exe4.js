
L2ES6_Exe4 = () => {
    let a = 0;
    const fn1 = (a) => a*3;
    function fn2() {
        return a/5;
    }
    let fn3 = function( a, b){
        return a+b;
    }

    console.log(fn3(fn1(fn1(2)), fn1(fn2(10))));
  };

  export default L2ES6_Exe4;