class Man:
    def __init__(self, name):
        self.name = name
        print("initialized!")

    def hello(self):
        print("Hello " + self.name + "!")
        
    def goodbye(self):
        print("Good-bye " + self.name + "!")

m = Man("Tony")
# initialized!
m.hello()
# Hello Tony!
m.goodbye()
# Good-bye Tony!
