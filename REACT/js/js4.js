let fakearr = {length : 5}
console.log(fakearr)

Array.from(fakearr, (v, i) => i)
console.log(fakearr)


var arr1 = Array.from(fakearr, (v, i) => i)
console.log(arr1)
