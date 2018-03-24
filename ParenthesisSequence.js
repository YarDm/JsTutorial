function isBalanced(str) {
    let opening = ['{', '[', '('], closing = ['}', ']', ')'], stck = [];
    str = str.split('');
    for (let i of str){
        if (opening.indexOf(i)>=0){
            stck.push(i);
        }
        else {
            let re = stck.pop();
            if (opening.indexOf(re) !== closing.indexOf(i)){
                return false;
            }
        }
    }
    return stck.length === 0;
}


console.log(isBalanced("{(})"));
