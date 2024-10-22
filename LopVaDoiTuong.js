//Class1
function Weapon(name, clipSize, weight, side){
    this.name = name;
    this.clipSize = clipSize;
    this.weight = weight;
    this.side = side;

    this.reload = function(){
        clipSize = 30;
        alert('Băng đạn đã đầy '+clipSize);
    }
}
//Object1
let weaponObj = new Weapon('M16', 30, 3, 'VNCH');
weaponObj.reload();


//Class2
class Unit {
    constructor (name, logo, helmet) {
        this.name = name;
        this.logo = logo;
        this.helmet = helmet;
    }

    displayInfo (){
        alert(this.name + ' ' + this.logo + ' ' + this.helmet);
    }
}
//Object2
let dv = new Unit('Biệt động quân','Tiger', 'M40' );
dv.displayInfo();


//Class 3
let WarZone =function (ten, bochihuy){
       this.ten = ten;
       this.bochihuy = bochihuy;
       this.getInfor = function () {
           alert(this.ten + ' ' + this.bochihuy);
       }
}
//Object 3
let chienthuat = new WarZone('Vùng chiến thuật I', 'Đà Nẵng');
chienthuat.getInfor();
