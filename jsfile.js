console.log("day la file js");

/*
viết hàm tính số lần xuất hiện của một string a, trong string b
*/ 

const NewString = (Stringa, Stringb) => {
    let NewNumber = 0;
    for(let i = 0; i < Stringb.length; i++){
        if(Stringa === Stringb[i]){
            NewNumber += 1;
        }
    }
    console.log("so lan xuat hien cua " + Stringa + " trong" + Stringb + "la " + NewNumber )
}
NewString('a', 'laemcolaemlacobevet');
