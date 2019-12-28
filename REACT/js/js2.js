
class Animal {
	constructor(leg) {
		this.leg = leg
	}	

	printAnimal() {
		console.log(this.name+" have(has) "+ String(this.leg)+" legs")
	}

}


// Lion -> Animal 유용한 기능을 가져다 쓰기!
class Lion extends Animal {
	constructor(name, leg) {
		super(leg) // 부모의 input (constructor 의 input)
		this.name = name
	}
	getName() {
		console.log("my name is " +this.name)
	}
}

myLion = new Lion("king", 4)
myLion.getName()
myLion.printAnimal()
