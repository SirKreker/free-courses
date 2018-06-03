/* Task 2 */

/* Put your code here */
var z1 = process.argv[2];
var z2 = process.argv[3];
var l1 = 0;
var l2 = 0;
var str1 = '';
var str2 = '';
l1 = z1.length-1;
l2 = z2.length-1;
if (l1!=l2){
    process.stdout.write('-1');
} else {
    var s = 10001;
    for (var i=1; i<l1; i++){
        str1 +=z1[i];
        str2 +=z2[i];
    }
    var l3 = 0;
    l3 = str1.length;
    for (i=0; i<l3; i++){
        if(str1[0]==str2[i]){
            var k = 0;
            for (var j=0; j<l3; j++){
                m = j + i;
                if (m>l3-1){
                    m -= l3; 
                }
                if (str1[j]!=str2[m]){
                    k++;
                }
            }
            if (k == 0){
                if (i<s){
                    s = i;
                }
                var f = l3 - i;
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