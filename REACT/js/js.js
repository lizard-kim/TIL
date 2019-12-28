function plusTwo(s){
	return s+2
}
console.log(plusTwo(10))

//arrow func
plusTree = s => s+3
console.log(plusTree(10))


arr = [1,2,3,4,5,6,7,8,9,10,13,223]

arr_map = arr.map(function(value) {return value*2})
console.log(arr_map)

arr_map2 = arr.map(v => v*3)
console.log(arr_map2)


arr_filter = arr.filter(v => v >10)
console.log(arr_filter)

