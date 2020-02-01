let fs = require('fs');
let readlineSync = require('readline-sync');

function managementStudent() {
	this.choseCase = null;
	this.newStudent = [];
}

// Hiển thị m
managementStudent.prototype.showMenu = function() {
	console.log('1. Show all students.');
	console.log('2. Create a new student.');
	console.log('3. Save & exit.');
	this.choseCase = readlineSync.question('Chose your case: ');
	// Gọi hàm dựa trên số nhập vào.
	this.render();
}

managementStudent.prototype.render = function(){
	switch (this.choseCase) {
		case '1':
			this.showData();
			break;
		case '2':
			this.createStudent();
			break;
		case '3':
			this.saveAndExit();
			break;
		default:
			console.log('You chose wrong case!');
			this.showMenu();
			break;
	}
};


managementStudent.prototype.showData = function() {
	// Đọc file.
	var data = fs.readFileSync('./data.json', 'utf8');
	data = JSON.parse(data);

	data.forEach((student, index) => {
		console.log(index + 1 + '. ---------------------------')
		console.log('Name: ' + student.name);
		console.log('Name: ' + student.age);
		console.log('Name: ' + student.class);
		console.log('---------------------------')
	})
	this.showMenu();
};

managementStudent.prototype.createStudent = function(){
	let student = {};
	student.name  = readlineSync.question('Name: ');
	student.age   = readlineSync.question('Age: ');
	student.class = readlineSync.question('Class: ');
	this.newStudent.push(student);
	this.showMenu();
};

managementStudent.prototype.saveAndExit = function(){
	// Đọc file.
	var data = fs.readFileSync('./data.json', 'utf8');
	data = JSON.parse(data);

	data = data.concat(this.newStudent);
	// Ghi file.
	data = JSON.stringify(data);
	fs.writeFileSync('./data.json', data);
};

let mn = new managementStudent();
mn.showMenu();