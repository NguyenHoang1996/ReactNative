
L2ES6_HomeWork2 = () => {
    let sentence = "Hello world hello hello earth earth  ";
    let array = sentence.toLowerCase().split(" ").sort();
    let obj = {};
    console.log(array);
    let count = 1;
    let temp = '';
    do{
        let a = array.pop();
        if( temp != a){
            temp = a;
            count = 1;
            if( a != ""){
                obj[a] = count;
            }

        } else if( temp == a ){
            count++;
            if( a != ""){
                obj[a] = count;
            }
        }
    }while(array.length !== 0); 
    console.log(obj);
};

export default L2ES6_HomeWork2;