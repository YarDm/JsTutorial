/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function toDEC( dec ) {

    //определяем переменные: вывод, длинна двоичного числа, единица
    let out = 0, len = dec.length, bit = 1;

    //постепенно идем по числам исползуя декримент после использования
    while( len-- ) {
        //для проверки используем выражение в котором числа поданные в функцию 
        //должны быть единицей или нулем
        if (dec[len]<=1) {
            out += dec[ len ] === "1" ? bit : 0;
            bit <<= 1;
        }
        else
            out = undefined;
        
    }
    return out;
}
console.log(toDEC('0111011101101'));

