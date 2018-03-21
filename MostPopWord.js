/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function wordSpec() {
    this.word = '';
    this.rate = 0;
};

function stringObj(string){
    this.string = string.toLowerCase().replace(/,.\n/g);
    this.arr = string.split(' ');
    return this.arr;
}

stringObj.prototype.strParse = function(){

    let approved = [], ws, array = this.arr;

    for (let i = 0; i < array.length; i++){
        ws = new stringObj();
        ws.word = array[i];
        ws.rate++;

        if (ws.word == array[i]){
            delete array[i];
            ws.rate++;
        }
        approved.push(ws);
    }
    return approved;

    };

let strob = new stringObj("Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas \
nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu \
euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae \
pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque \
Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget \
fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas \
finibus lorem non tempor tincidunt aera");
strob.strParse();
