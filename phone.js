let Mobile = function (battery, isOn, draftMessage, inbox, sentMessages) {
    this.battery = 100;
    this.isOn = false;
    this.draftMessage = "";
    this.inbox = [];
    this.sentMessages = [];

    //Kiem tra trang thai dien thoai
    this.checkStatus = function (){
        return this.isOn ? 'Dien thoai dang bat' : 'Dien thoai dang tat';
    }

    //Bat dien thoai
    this.turnOn = function (){
        this.isOn = true;
    }

    //Tat dien thoai
    this.turnOff = function (){
        this.isOn = false;
    }

    //Sac pin
    this.charge = function (){
        this.battery = 100;
    }
    //Soan tin nhan
    this.composeMessage = function (message) {
        if(this.isOn) {
            this.draftMessage = message;
            this.battery -- ;
            console.log(`Da soan tin nhan: ${this.draftMessage}.
                    Trang thai pin: ${this.battery}`);
        }else {
            console.log('Dien thoai dang tat. Ko the soan tin nhan');
        }
    }
    //Nhan tin nhan
    this.receiveMessage = function (message) {
        if(this.isOn) {
            this.inbox.push(message);
            this.battery--;
            console.log(`Tin nhan da nhan: ${message}
                        Trang thai pin: ${this.battery}`);
        }else {
            console.log('Dien thoai dang tat. Ko the nhan tin nhan');
        }
    }
    //Gui tin nhan
    this.sendMessage = function (otherPhone) {
        if(this.isOn) {
            if(this.draftMessage){
                otherPhone.receiveMessage(this.draftMessage);
                this.sentMessages.push(this.draftMessage);
                this.draftMessage = "";
                this.battery--;
                console.log(`Da gui tin nhan: ${this.sentMessages[this.sentMessages.length - 1]}
                            Trang thai pin: ${this.battery}`);
            }else {
                console.log('Khong co tin nhan de gui!');
            }
        }else {
            console.log('Dien thoai dang tat. Ko the gui tin nhan');
        }
    }
    //Xem tin nhan
    this.viewInbox = function(){
        if(this.isOn) {
            console.log('Hop thu den: ');
            this.inbox.forEach((message, index) => {
                console.log(message);
            });
            this.battery -- ;
            console.log(`Trang thai pin: ${this.battery} %`);
        }else {
            console.log('Dien thoai dang tat. Ko the xem hop thu den')
        }
    }
    //Xem tin da gui
    this.viewSentMessages = function() {
        if(this.isOn) {
            console.log('Tin da gui: ');
            this.sentMessages.forEach((message, index) => {
                console.log(message);
            });
            this.battery--;
            console.log(`Trang thai pin: ${this.battery} %`);
        }else {
            console.log('Dien thoai dang tat. Ko the xem tin da gui.');
        }
    }
};
//Vi du su dung lop Mobile
let nokia = new Mobile();
let iphone = new Mobile();

nokia.turnOn();
nokia.composeMessage('Hello');
nokia.sendMessage(iphone);
iphone.turnOn();
iphone.viewInbox();
iphone.viewSentMessages();
nokia.viewSentMessages();