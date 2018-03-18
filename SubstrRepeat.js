/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//let text = "abcabcabcabc";
function uniq(text) {
    let arr = text.split("");
    
    let seen = {};
    let out = [];
    let len = arr.length;
    let j = 0;
    for(let i = 0; i < len; i++) {
         let item = arr[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    let res = out.toString().replace(/[,]/g, '');
    //return res;
    let val = text.length / res.length;
    console.log(val);
    console.log(res);
}

uniq("abcabcabcabc");
