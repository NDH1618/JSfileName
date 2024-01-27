console.log("teset lai bai so 8");




function TotalCoins(salary){

    function findNoteAndCoins(salary) {
        const notes = [500, 100, 50, 20, 2, 1];
        const notesCount = [];
    
        let remaining = salary;
        for (const note of notes) {
            if (salary >= note) {
                notesCount.push(Math.trunc(remaining / note));
                remaining = remaining % note;
            } else {
                notesCount.push(0);
            }
        }    
        return notesCount;
    }
    console.log(findNoteAndCoins(2316))

    let noteCoins = findNoteAndCoins(salary);
    let total = 0;
    for(let i = 0; i < noteCoins.length; i++) {
        if(noteCoins[i] > 0){
            total += noteCoins[i];
        }
    }
    return total;
}

console.log(TotalCoins(2316))


//7. Hàm đọc số thành chữ mô tả số tiền (Sử dụng hàm đọc số có ba chữ số, nếu lớn hơn báo quá lớn)

function DocTienBangChu(SoTien) {

    let ChuSo = new Array(" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín ");
    let Tien = new Array("", "nghìn", "triệu", "tỷ", "nghìn tỷ", "triệu tỷ");

    //1. Hàm đọc số có ba chữ số;
    function DocSo3ChuSo(baso) {
        let tram;
        let chuc;
        let donvi;
        let KetQua = "";
        tram = parseInt(baso / 100);
        chuc = parseInt((baso % 100) / 10);
        donvi = baso % 10;
        if (tram == 0 && chuc == 0 && donvi == 0) return "";
        if (tram != 0) {
            KetQua += ChuSo[tram] + "trăm";
            if ((chuc == 0) && (donvi != 0)) KetQua += "linh";
        }
        if ((chuc != 0) && (chuc != 1)) {
            KetQua += ChuSo[chuc] + "mươi";
            if ((chuc == 0) && (donvi != 0)) KetQua = KetQua + "linh";
        }
        if (chuc == 1) KetQua += "mười";
        switch (donvi) {
            case 1:
                if ((chuc != 0) && (chuc != 1)) {
                    KetQua += "mốt";
                }
                else {
                    KetQua += ChuSo[donvi];
                }
                break;
            case 5:
                if (chuc == 0) {
                    KetQua += ChuSo[donvi];
                }
                else {
                    KetQua += "lăm";
                }
                break;
            default:
                if (donvi != 0) {
                    KetQua += ChuSo[donvi];
                }
                break;
        }
        return KetQua;
    }



    let lan = 0;
    let i = 0;
    let so = 0;
    let KetQua = "";
    let tmp = "";
    let ViTri = new Array();
    if (SoTien < 0) return "Số tiền âm !";
    if (SoTien == 0) return "Không đồng !";
    if (SoTien > 0) {
        so = SoTien;
    }
    else {
        so = -SoTien;
    }
    if (SoTien > 8999999999999999) {
        //SoTien = 0;
        return "Số quá lớn!";
    }
    ViTri[5] = Math.floor(so / 1000000000000000);
    if (isNaN(ViTri[5]))
        ViTri[5] = "0";
    so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
    ViTri[4] = Math.floor(so / 1000000000000);
    if (isNaN(ViTri[4]))
        ViTri[4] = "0";
    so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
    ViTri[3] = Math.floor(so / 1000000000);
    if (isNaN(ViTri[3]))
        ViTri[3] = "0";
    so = so - parseFloat(ViTri[3].toString()) * 1000000000;
    ViTri[2] = parseInt(so / 1000000);
    if (isNaN(ViTri[2]))
        ViTri[2] = "0";
    ViTri[1] = parseInt((so % 1000000) / 1000);
    if (isNaN(ViTri[1]))
        ViTri[1] = "0";
    ViTri[0] = parseInt(so % 1000);
    if (isNaN(ViTri[0]))
        ViTri[0] = "0";
    if (ViTri[5] > 0) {
        lan = 5;
    }
    else if (ViTri[4] > 0) {
        lan = 4;
    }
    else if (ViTri[3] > 0) {
        lan = 3;
    }
    else if (ViTri[2] > 0) {
        lan = 2;
    }
    else if (ViTri[1] > 0) {
        lan = 1;
    }
    else {
        lan = 0;
    }
    for (i = lan; i >= 0; i--) {
        tmp = DocSo3ChuSo(ViTri[i]);
        KetQua += tmp;
        if (ViTri[i] > 0) KetQua += Tien[i];
        if ((i > 0) && (tmp.length > 0)) KetQua += '';
    }
    if (KetQua.substring(KetQua.length - 1) == '') {
        KetQua = KetQua.substring(0, KetQua.length - 1);
    }
    KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2);
    return KetQua;
}







module.exports = {
    DocTienBangChu,
    TotalCoins,
};


console.log('chay thu ham doc chu so')
console.log(DocTienBangChu(1253400));