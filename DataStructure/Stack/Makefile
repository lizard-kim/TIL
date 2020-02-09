CC=g++
OBJS=stack.o
TARGET=stack
 
$(TARGET): $(OBJS)
	$(CC) -o $@ $(OBJS)

stack.o: stack.cpp
	$(CC) -c stack.cpp

clean:
	rm *.o stack
