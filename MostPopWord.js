/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function wordSpec() {
    this.word = '';
    this.rate = 0;
}
function stringObj(text){
    this.text = text.replace(/\n/g).toLowerCase();
    this.arr = text.split(' ');

}

stringObj.prototype.strParse = function(){

    let approved = [], ws, array = this.arr;

    for (let i = 0; i < array.length; i++){
        ws = new wordSpec();
        ws.word = array[i];
        ws.rate++;

        let j = 0;
        while (j < array.length){
            if (ws.word === array[j]){
                delete array[j];
                ws.rate++;
            }
            else if (array.length === 0){
                break;
            }
            j++
        }

        approved.push(ws);
    }
    for (let i = 0; i < approved.length; i++){
        if (approved[i].word === undefined){
            delete approved[i];
        }
    }
    approved = approved.filter(function(n){ return n != undefined }).sort(sortFunc);
    return approved[0];

    };

function sortFunc(a, b) {
    if (a.rate > b.rate) return -1;
    if (a.rate < b.rate) return 1;
}

let strob = new stringObj("Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas \
nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu \
euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae \
pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque \
Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget \
fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas \
finibus lorem non tempor tincidunt aera");
console.log(strob.strParse());
