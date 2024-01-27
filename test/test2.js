const lessionTest2 = require('../beta/lession2');

function testLession2() {

    console.log(`
    ...............FUNCTION 1 đảo ngược ký tự của từng từ.................`)
    let test1 = lessionTest2.reverse(['con', 'co', 'be', 'no']);
    let test1Result = ['no', 'be', 'co', 'con'];
    if(JSON.stringify(test1) == JSON.stringify(test1Result)){
        console.log(`test should be TRUE`)
    }
    else{
        console.log(`test FALSE`)
    }



    console.log(`
    ...............FUNCTION 2 radom trả về giá trị từ 0 đến 1 có lấy 0 và 1.................`);
    let test2 = lessionTest2.reverseString(0, 1);
    if(test2 >= 0 && test2 <= 1) {
        console.log(`test should be TRUE`)
    }
    else{
        console.log(`test FALSE`)
    }


    console.log(`
    ...............FUNCTION 3 nối hai mảng theo thứ tự giảm dần.................`)
    let test = lessionTest2.Arrange4([1, 3, 5], [3, 2, 0 ,9]);
    let testResult = [9, 5, 3, 3, 2, 1, 0];
    if(JSON.stringify(test) == JSON.stringify(testResult)){
        console.log(`test should be TRUE`)
    }
    else{
        console.log(`test FALSE`)
    }


    
    

    console.log(`
    ...............FUNCTION 9 tính số lần xuất hiện của một string a, trong string b.................`);
    let test9 = lessionTest2.NewString('a', 'laemacolaemlacobevet');
    let test9Result = 4;
    if(test9Result == test9){
        console.log(`test should be TRUE`)
    }
    else{
        console.log(`test FALSE`)
    }



}

testLession2();