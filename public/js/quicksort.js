function recursify(n){

	console.log(n); // 5

	n--;
	recursify(n);
	if (n === 0) {
		return n;
	}
	return recursify(n);
}

recursify(5);


