#include <iostream>
#include <vector>
#include <cstring>

using namespace std;

class Input{
	public:
		std::string input;
		int len;
};

void sorting(Input** arr1, int low, int high, Input** arr2){
	//length == 1
	if(low >= high) return;

	int mid = (low+high)/2;

	sorting(arr1, low, mid, arr2);
	sorting(arr1, mid+1, high, arr2);

	//sorting
	
	for(int i=low; i < high, i++){
		if(arr1[i]->len < arr1[i+1]->len){
			arr2[i] = arr1[i];
		}
		else if(arr1[i]->len == arr1[i+1]->len){
			if(strcmp(arr1[i]->input, arr1[i]->input) >= 0){
				arr2[i] = arr1[i];
			}
			else{
				arr2[i] = arr1[i+1];
			}
		}
	}
	
}

int main(){
	int input = 0;
	std::string istr;

	cin >> input;
	
	Input** Iarr = new Input* [input];

	for(int i=0; i < input; i++){
		cin >> istr;
		Iarr[i] = new Input();
		Iarr[i]->input = istr;
		Iarr[i]->len = istr.length();
	}
	
	


	bool d = strcmp("aa", "aa");
	cout << d << endl;
}
