
/*
Bài 1, hàm đảo ngược ký tự của từng từ trong một cầu với đầu vào là một mảng String 
chứa các từ ngăn nhau bằng dấu cách
*/ 
function reverse(inputArray){
    return inputArray.reverse()
}
console.log(reverse(['con', 'co', 'be', 'no', 'dau']));


/*
Bài tập 2, hàm random trả về giá trị từ 0 đến 1 có lấy 0 và 1
*/ 
const reverseString = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(reverseString(0, 1));






/*
hàm nối hai mảng theo thứ tự giảm dần từ đầu vào 2 mảng tăng dần

*/ 
const Arrange4 = (array1, array2) => {
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    let c = array1.concat(array2).sort((a, b) => b - a);
    return c;
};
console.log(Arrange4([1, 3, 5, 6], [3, 2, 0 ,9]));




/*
Bài 9, viết hàm tính số lần xuất hiện của một string a, trong string b
*/ 

const NewString = (Stringa, Stringb) => {
    let NewNumber = 0;
    for(let i = 0; i < Stringb.length; i++){
        if(Stringa === Stringb[i]){
            NewNumber += 1;
        }
    }
    return NewNumber;
}
NewString('a', 'laemcolaemlacobevet');

module.exports = {
    Arrange4,
    reverse,
    NewString,
    reverseString,
}
