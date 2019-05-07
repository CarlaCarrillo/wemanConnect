//función de fiboncci

'use strict';

function fibonacci(n){
var a=0;
var b=1;
 
for(i=0; i<n;i++){
var numeroTemporal=a;
a=b;
b=numeroTemporal+b;
 
document.writeln(a+" ");
}
 
}

fibonacci(10);