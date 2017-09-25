
L2ES6_Exe2 = () => {
    const myObject = {a: 1, b: 2};   
    console.log(myObject['a']);
    console.log(myObject['b']);
    console.log(myObject);

    const myObject2 = myObject;
    myObject['a']   = 999;
    console.log(myObject['a'], myObject2['a']);
  };

  export default L2ES6_Exe2;
