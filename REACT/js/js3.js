
function sayHello(name, byeCallback) {
	setTimeout(()=>{
		console.log(name+" Welcome!")
		// sayGoodbye()
		byeCallback()
	}, 2000)
}

// sayHello("Mike", ()=>console.log("Good bye!"))


function sayHello2(name) {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			console.log(name+" Welcome!")
			resolve("Seoul")
		}, 3000)
	} 
	)
}


// sayHello2("Frank")
//     .then((loca)=> console.log(loca+" Good bye!")) // loca = Seoul


async function sayHelloBye(name) {
	loc = await sayHello2(name)

	console.log(loc + " Good Bye!")
}

sayHelloBye("Lizard")
