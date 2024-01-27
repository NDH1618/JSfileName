const lessionTest3 = require('../delta/lession3');

function testLession3() {
    console.log(`
    ...............FUNCTION 10 sáo trộn thứ tự của các phần tử trong mảng với tất cả các vị trí đã được thay đổi............`);
    let test10 = lessionTest3.Shuffle([1, 2, 3]);
    let test10Result = [3, 1, 2] ;
    let test10Result2 = [2, 3, 1];
    if(JSON.stringify(test10) == JSON.stringify(test10Result) || JSON.stringify(test10) == JSON.stringify(test10Result2)){
        console.log(`test should be TRUE`)
    }
    else{
        console.log(`test FALSE`)
    }


    console.log(`
    ...............FUNCTION 11 hàm trả về chữ số cuối cùng khác 0 của n giai thừa...............`);
    let test11 = lessionTest3.poinAt(14);
    let test11Result = 2;
    if(test11Result == test11){
        console.log(`test should be TRUE`)
    }
    else{
        console.log(`test FALSE`)
    }


    console.log(`
    ...............FUNCTION 12 hàm trả về số chứ số 0 trong giá trị của n giai thừa...............`);
    let test12 = lessionTest3.Temps(14);
    let test12Result = 2;
    if(test12Result == test12){
        console.log(`test should be TRUE`)
    }
    else{
        console.log(`test FALSE`)
    }

}

testLession3();