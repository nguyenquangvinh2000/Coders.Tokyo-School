function coutFrom(a, b) {
	return new Promise((resolve, reject) => {
		var intervalCount = setInterval(() => {
			console.log(a);
			if (a === b) {
				clearInterval(intervalCount);
				resolve();
			}
			a++;
		    }, 1000);
	    });
}

coutFrom(1, 5).then(console.log('Count start.'));