/* Task 2 */

/* Put your code here */
var str1 = process.argv[2];
var str2 = process.argv[3];
str1 = ''+str1;
str2 = ''+str2;
var l1 = str1.length;
var l2 = str2.length;
if (l1!=l2){
    process.stdout.write('-1');
} else {
    var s = 10001;
    for (i=0; i<l1; i++){
        if(str1[0]==str2[i]){
            var k = 0;
            for (var j=0; j<l1; j++){
                m = j + i;
                if (m>l1-1){
                    m -= l1; 
                }
                if (str1[j]!=str2[m]){
                    k++;
                }
            }
            if (k == 0){
                if (i<s){
                    s = i;
                }
                var f = l1 - i;
                if (f<s){
                    s = f;
                }
            }
        }
    }
    if (s<10001){
        var answer = ''+s;
        process.stdout.write(answer);
    } else {
        process.stdout.write('-1')
    }
}