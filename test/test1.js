const lessionTest1 = require('../alpha/lession1');

function testLession1() {
    console.log(`
    ...............FUNCTION 7 hàm chuyển một số thành tiền , một string mô tả bằng chữ ...............`);
    let test7 = lessionTest1.DocTienBangChu(236400);
    let test7Result = 'Hai trăm ba mươi sáu nghìn bốn trăm';
    if(JSON.stringify(test7Result) == JSON.stringify(test7)){
        console.log(`test should be TRUE`)
    }
    else{
        console.log(`test FALSE`)
    }



    console.log(`
    ...............FUNCTION 8 hàm trả về số đồng tiền ít nhất để quy đổi, 
    chỉ sử dụng các đồng tiền 500, 100, 50, 20, 2, 1...............`);
    let test8 = lessionTest1.TotalCoins(2291);
    console.log(test8);
    let test8Result = 10;
    if(test8Result == test8){
        console.log(`test should be TRUE`)
    }
    else{
        console.log(`test FALSE`)
    }
}

testLession1();
