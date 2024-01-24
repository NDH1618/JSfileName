console.log("lession2");
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