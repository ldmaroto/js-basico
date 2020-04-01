/*

SECCIÓN 8: Falso y verdadero.

*/


// Valores falsos

var f1 = Boolean();
var f2 = Boolean(0);
var f3 = Boolean(null);
var f4 = Boolean(NaN);
var f5 = Boolean(undefined);
var f6 = Boolean(false)
var f7 = Boolean("");

console.log("F1 --> " + f1);
console.log("F2 --> " + f2);
console.log("F3 --> " + f3);
console.log("F4 --> " + f4);
console.log("F5 --> " + f5);
console.log("F6 --> " + f6);
console.log("F7 --> " + f7);

// Valores verdaderos

var t1 = Boolean(".");
var t2 = Boolean(" ");
var t3 = Boolean(1);
var t4 = Boolean([]);
var t5 = Boolean({});
var t6 = Boolean(function(){});
var t7 = Boolean(true);

console.log("T1 --> " + t1);
console.log("T2 --> " + t2);
console.log("T3 --> " + t3);
console.log("T4 --> " + t4);
console.log("T5 --> " + t5);
console.log("T6 --> " + t6);
console.log("T7 --> " + t7);