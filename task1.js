/* Task 1 */

/* Put your code here */
var str = process.argv[2];
var n = 0;
n = str.length-1;
var str1 = '';
for (var i=1; i<n; i++){
    if ((str[i]!='Р')&&(str[i]!='К')&&(str[i]!='Н')&&(str[i]!='р')&&(str[i]!='к')&&(str[i]!='н')){
        str1 +=str[i];
    }
}
console.log(str1);