// Require module.
let readlineSync = require('readline-sync');
let fs = require('fs');

let contactList = [];

/**
 * Read file data.json
 * @return {Array}
 */
function readFile() {
	let data = fs.readFileSync('./data.json', 'utf8');
	return JSON.parse(data);
}

/**
 * Write contact to data.json
 * @param  {Array} data [Contain new contact]
 */
function writeFile(data) {
	data = readFile().concat(data);
	data = JSON.stringify(data);
	fs.writeFileSync('./data.json', data);
}


function showMenu() {
	console.log('1. Show all contact');
	console.log('2. Add contact');
	console.log('3. Edit contact');
	console.log('4. Delete contact');
	console.log('5. Search contact');
	console.log('6. Exit');
	let numSelect = readlineSync.question('* Chose your option: ');
	switch (numSelect) {
		case '1':
			showAllContact();
			showMenu();
			break;
		case '2':
			addContact();
			showMenu();
			break;
		case '3':
			editContact();
			showMenu();
			break;
		case '4':
			deleteContact();
			showMenu();
			break;
		case '5':
			searchContact();
			showMenu();
			break;
		case '6':
		    console.log('Exit ok.')
			break;
		default:
			console.log('!');
			console.log('You chose wrong option!. Please select again.')
			console.log('!');
			showMenu();
			break;
	}
}

function showAllContact() {
    let data = readFile(); //Read file JSON and given a array data.
    data.forEach( function(element, index) {
    	console.log('[' + (index + 1) + ']');
    	console.log('Name : ' + element.name);
    	console.log('Phone: ' + element.phone);
    	console.log('----------------');
    });

}

function addContact() {
	let name  = readlineSync.question('Name : ');
	let phone = readlineSync.question('Phone: ');
	contactList.push({name: name, phone: phone});
	writeFile(contactList);
	console.log('Add success!')
}

function editContact() {
	let contactList = readFile(); // contact list.
	let list = contactList.map((contact) => {
		return contact.name + ': ' + contact.phone;
	});
	let id = readlineSync.keyInSelect(list, 'Enter the id of contact you want to edit!: ');
	// id sẽ tự động bị trừ đi 1. Nhập 1 -> 0;

	contactList[id].name  = readlineSync.question('Name : ');
	contactList[id].phone = readlineSync.question('Phone : ');

	// Chuyển sang JSON rồi lưu lại.
	contactList = JSON.stringify(contactList);
	fs.writeFileSync('./data.json', contactList);
	console.log('Edit success!');
}

function deleteContact() {
	let contactList = readFile(); // contact list.
	let list = contactList.map((contact) => {
		return contact.name + ': ' + contact.phone;
	})
	let id = readlineSync.keyInSelect(list, 'Enter the id of contact you want to delete!: ');
	// id sẽ tự động bị trừ đi 1. Nhập 1 -> 0;
	if (id != -1) {
		contactList.splice(id, 1); // Xóa khỏi aray.
		// Chuyển sang JSON rồi lưu lại.
		contactList = JSON.stringify(contactList);
		fs.writeFileSync('./data.json', contactList);
		console.log('Delete success!');
	}

}

function searchContact() {
    let contactList = readFile();
    let listNameAndPhone = contactList.reduce((acc, cur) => {
    	// cur.name = xoa_dau(cur.name);
    	return acc.concat(cur.name, cur.phone);
    }, []);

    let searchTxt = readlineSync.question('Search here: ');
    searchTxt = changeAlias(searchTxt);
    let result = [];
    result = contactList.reduce((acc, cur) => {
    	if (changeAlias(cur.name).search(searchTxt) !== -1 || changeAlias(cur.phone).search(searchTxt) !== -1) {
    		return acc.concat(cur);
    	} else
    	    return acc;
    }, []);
    
    if (result.length > 0) {
    	console.log('Found ' + result.length + ' results.')
    	console.log('----------------');
	    result.forEach((el, id) => {
	    	console.log('[' + (id + 1) + ']')
	    	console.log('Name : ' + el.name);
	    	console.log('Phone: ' + el.phone);
	    });
	    console.log('----------------');
	} else {
		console.log('No result...')
	}
    
}

// Xoa dau.
function changeAlias(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

showMenu();

