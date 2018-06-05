/* Task 1 */

/* Put your code here */
var str = process.argv[2];
var n = 0;
n = str.length-1;
for (var i=1; i<n; i++){
    if ((str[i]!='Р')&&(str[i]!='К')&&(str[i]!='Н')&&(str[i]!='р')&&(str[i]!='к')&&(str[i]!='н')){
        process.stdout.write(str[i]);
    }
}