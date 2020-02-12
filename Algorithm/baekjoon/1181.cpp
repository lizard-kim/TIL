#include <iostream>
#include <vector>

using namespace std;

void sorting(vector<string>& v){

}


int main(){
	int input = 0;
	string istr;

	cin >> input;

	vector<string> v(input,"0");
	
	for(int i=0; i < input; i++){
		cin >> istr;
		v.push_back(istr);
	}

	sorting(v);

	cout << v.at(2) << endl;
	

}
