console.log("lession3");
/*
hàm random trả về giá trị từ 0 đến 1 có lấy 0 và 1
*/ 
const reverseString = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(reverseString(0, 1));
