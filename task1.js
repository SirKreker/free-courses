/* Task 1 */

/* Put your code here */
var str = process.argv[2];
str = str.replace(/[ркн]/gi,'');
process.stdout.write(str);