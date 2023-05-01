'use strict';

let i = 2;
for (; i <= 100; i++) {
   let flag = true ;
   for (let j = 2; j < i; j++) {
    if ( i % j === 0 ) {
    flag = false ;
    break;
   } 
} 
if (flag) {
    console.log(i);
}
}