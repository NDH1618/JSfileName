
/*
Bài 10, viết hàm sáo trộn thứ tự của các phần tử trong mảng với tất cả các vị trí đã được thay đổi
*/ 
const Shuffle = (items) => {
    for (let i = items.length; i-- > 1;) {
        let j = Math.floor(Math.random() * i);
        let tmp = items[i];
        items[i] = items[j];
        items[j] = tmp;
    }
    return items;
}
console.log(Shuffle([1,2,3]));



/*
Bài 11 viết hàm trả về chữ số cuối cùng khác 0 của n giai thừa
*/ 
const poinAt = (n) => {
    const factorial = (n) => {
        let factory = 1;
        for(let i = 1; i <= n; i++){
            factory = factory * i;
        }
        return factory;
    }

    let poin;
    let Stringfactoty = factorial(n).toString();
    console.log(Stringfactoty)
    let a = Stringfactoty.length;
    while (a--) {
        if(Stringfactoty.charAt(a) != 0){
            poin = Stringfactoty.charAt(a);
            break;
        }
    }
    return poin;
}


/*
Bài 12 viết hàm trả về số chứ số 0 trong giá trị của n giai thừa
*/ 
const Temps = (n) => {
    const factorial = (n) => {
        let factory = 1;
        for(let i = 1; i <= n; i++){
            factory = factory * i;
        }
        return factory;
    }

    console.log(factorial(n));
    let Stringfactoty = factorial(n).toString();
    let a = Stringfactoty.length;
    let OutPut = 0;
    for( let i = 0; i < a; i++ ){
        if(Stringfactoty[i] == 0){
            OutPut += 1;
        }
    }   
    return OutPut;
}

console.log(poinAt(12));
console.log(Temps(12));

module.exports = {
    Shuffle,
    poinAt,
    Temps
};









