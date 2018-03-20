/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function wordSpec (word){
    this.word = word;
    this.rate = 0;
}

function stringObj(){
    this.string = null;
    this.arr = null;
}

stringObj.prototype.add = function(string){
    this.string = string.replace(/[,.]/g, ' ').toLowerCase;
    this.arr = string.split('');
    console.log(this.arr);
};

stringObj.prototype.strParse = function(){
    let tested = [], complete = [], item;
    
    while(this.arr.length){
        item = new wordSpec(this.arr.shift());
        if (tested.indexOf(item) === -1) {
      // добавляем в список
            tested.push(item);
      // и ищем дубли
            if (this.arr.indexOf(item) >= 0) {
                item.rate++;
            }
        let fin = complete.push(item);
        console.log(fin);
    }
        
    }
    
};
let strob = new stringObj();
strob.add("Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut\n\
 lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl \n\
Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue\n\
 elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae \n\
pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque \n\
Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et \n\
laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt \n\
accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras \n\
egestas finibus lorem non tempor tincidunt aera");
strob.strParse();