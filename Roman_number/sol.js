/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var format = {
        1000 : 'M',
        900  : 'CM',
        500  : 'D',
        400  : 'CD',
        100  : 'C',
        90   : 'XC',
        50   : 'L',
        40   : 'XL',
        10   : 'X',
        9    : 'IX',
        5    : 'V',
        4    : 'IV',
        1    : 'I'
    }
    var result = "";
    var temp = num;
    var a = Object.keys(format).reverse();
    for(let i = 0; i < a.length;i++){
        while((temp - parseInt(a[i])) >= 0){
            temp = temp -  parseInt(a[i]);
            result = result + format[a[i]];
        }
    }
    return result;
};