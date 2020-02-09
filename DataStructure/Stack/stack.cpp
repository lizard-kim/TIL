#include <iostream>
#include <stdexcept>

using namespace std;

class StackEmpty : public std::runtime_error{
	public:
		explicit StackEmpty(const std::string& msg) : runtime_error(msg) {}
		explicit StackEmpty(const char* msg) : runtime_error(msg){}
};

class List{
	private:
		class Node{
			public:
				string data;
				Node* prev;
				Node* next;

				Node(string input){
					data = input;
					prev = NULL;
					next = NULL;
				};
		};
		Node* head;
	public:
		void init(string input){
			Node* head = new Node(input);
			head->prev = NULL;
			head->next = NULL;

			cout << "init: " << input << endl;
		};

		void save();
		void del();
		void traversal();
};

template<class E>
class Stack{
	public:
		Stack();
		~Stack();

		size_t size() const;
		bool empty() const;
		const E& top() const throw(StackEmpty);
		void push(const E& e);
		void pop() throw(StackEmpty);
};



int main(){
	List l = List();
	l.init("haha");
}

