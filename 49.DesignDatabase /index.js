var classes = [
    { 
    	id: 0,
    	name: '1A',
    	teacher: 0
    },
    { 
    	id: 1,
    	name: '2A',
    	teacher: 1
    },
    { 
    	id: 2,
    	name: '3A',
    	teacher: 3
    },
    {
    	id: 3,
    	name: '4A',
    	teacher: 4
    }
];

var teachers = [
	{ 
		id: 0,
		name: 'Huong',
		age: 30
	},
	{ 
		id: 1,
		name: 'Hai',
		age: 29
	},
	{ 
		id: 2,
		name: 'Hai',
		age: 29
	},
	{ 
		id: 3,
		name: 'Hai',
		age: 29
	}
];

var students = [
	{ id: 0, name: 'Duy Truong', height: 120, class: 0 },
	{ id: 1, name: 'Duy Truong', height: 120, class: 0 },
	{ id: 2, name: 'Duy Truong', height: 120, class: 0 },
	{ id: 3, name: 'Duy Truong', height: 120, class: 1 }
];

// Danh sach hoc sinh lop 1A.
function getStudents(className) {
    var classObject = classes.find((element) => {
    	return element.name === className;
    });

    return students.filter((el) => {
    	return el.class === classObject.id;
    });
}

var listStudents = getStudents('2A');
console.log(listStudents);