
L2ES6_Exe3 = () => {
    const b = 777;
    // b = 888;
    //error: b is read-only variable, can't reassign it.
    
    var a = 3;
    for(let a=0; a<2; a++){
        console.log(a);
    }
    {
        let a=999;
        console.log(a);
    }
    {
        console.log(a);
    }
  };

  export default L2ES6_Exe3;