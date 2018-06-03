/* Task 3 */

/* Put your code here */
var x1 = Number(process.argv[2]);
var x2 = Number(process.argv[3]);
var n = 0;
var s = 1;
if (x1<x2){
	n = x1;
} else {
	n = x2;
}
for (var i = 1; i<=n; i++){
	if (((x1%i)==0)&&((x2%i)==0)){
		s = i;
	}
}
console.log(s);