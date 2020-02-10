#include <iostream>
#include <stdexcept>

using namespace std;

class StackEmpty : public std::runtime_error{
	public:
		explicit StackEmpty(const std::string& msg) : runtime_error(msg) {
			cout << "RUNTIEM ERROR" << endl;
		}
};

template<class E, class N>
class Stack{
	public:
		size_t size(E* List){
			return List->size();
		}
		void empty(E* List){
			if(size(List) == 0) cout << "TRUE" << endl;
			else cout << "FALSE" << endl;
		}
		const N top(E* List) const throw(StackEmpty){
			if(List->now) return List->now;
			else {
				cout << "ERROR" << endl;
				return NULL;	
			}
		}

		void push(E* List){
			string Input;
			cin >> Input;
			if(size(List) == 0){
				List->init(Input);
			}
			else
				List->save(Input);
		}
		void pop(E* List) throw(StackEmpty){
			List->del();
		}
		void tra(E* List){
			List->traversal();
		}
};

class List{
	public:
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
		Node* now;
		void init(string input){
			head = new Node(input);
			now = head;
			head->prev = NULL;
			head->next = NULL;

			cout << "init: " << input << endl;
		};

		void save(string input){
			Node* node = new Node(input);
			now->next = node;
			node->prev = now;
			node->next = NULL;
			node->data = input;
			now = node;
			cout << "new node :" << input << endl;
		}
		void del(){
			cout << "del" << endl;
			if(now){
				if(now->prev){
					now = now->prev;
					delete now->next;
					now->next = NULL;
				}
				else{
					delete now;
					now = NULL;
					head = NULL;
				}
			}
			else{
				cout << "ERROR" << endl;
			}
		}
		void traversal(){
			Node* point;
			if(head) point = head;
			else point = NULL;
			while(point != NULL){
				cout << point->data << endl;
				point = point->next;
			}
		}
		
		int size(){
			Node* point;
			int Size = 0;
			if(head) point = head;
			else point = NULL;
			while(point){
				Size++;
				point = point->next;
			}
			cout << "size :" << Size << endl;
			return Size;
		}
		template <class E, class N> friend class Stack;
};




int main(){
	List* l = new List();
	Stack<List, List::Node*> s = Stack<List, List::Node*>();
	s.push(l);
	s.push(l);
	s.pop(l);
	s.size(l);
	s.push(l);
	s.empty(l);
	s.tra(l);
	s.pop(l);
	s.tra(l);
}

