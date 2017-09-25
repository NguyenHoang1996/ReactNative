
L2ES6_Exe7 = () => {
    let number = "123.34";
    let numToWord = {
        "1" : "one",
        "2" : "two",
        "3" : "three",
        "4" : "four",
        "5" : "five",
        "6" : "six",
        "7" : "seven",
        "8" : "eight",
        "9" : "nine",
        "." : "dot",
    }
    let text = '';
    for (var i = 0; i < number.length; i++) {
        text += numToWord[number[i]] + ' ';
    }
    console.log(text);
};

export default L2ES6_Exe7;